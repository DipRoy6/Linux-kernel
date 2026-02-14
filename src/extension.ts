import * as vscode from 'vscode';
import * as path from 'path';
import { promisify } from 'util';
import { execFile as execFileCallback } from 'child_process';

const execFile = promisify(execFileCallback);

interface KernelDebuggerConfig {
  subscriptionId: string;
  resourceGroup: string;
  vmName: string;
  pythonPath: string;
}

interface McpServerDefinition {
  id: string;
  label: string;
  command: string;
  args: string[];
  cwd?: string;
}

function getConfig(): KernelDebuggerConfig {
  const config = vscode.workspace.getConfiguration('azureKernelDebugger');
  return {
    subscriptionId: config.get<string>('subscriptionId', ''),
    resourceGroup: config.get<string>('resourceGroup', ''),
    vmName: config.get<string>('vmName', ''),
    pythonPath: config.get<string>('pythonPath', 'python')
  };
}

async function isAzureCliInstalled(): Promise<boolean> {
  try {
    await execFile('az', ['--version']);
    return true;
  } catch {
    return false;
  }
}

function buildServerDefinition(context: vscode.ExtensionContext): McpServerDefinition {
  const config = getConfig();
  return {
    id: 'azureKernelDebugger.server',
    label: 'Azure Kernel Debugger',
    command: config.pythonPath,
    args: [
      path.join(context.extensionPath, 'src', 'python', 'server.py'),
      '--subscription',
      config.subscriptionId,
      '--resource-group',
      config.resourceGroup,
      '--vm-name',
      config.vmName
    ],
    cwd: context.extensionPath
  };
}

async function registerMcpServerProvider(context: vscode.ExtensionContext): Promise<void> {
  // VS Code MCP APIs are still evolving. We feature-detect the registration API
  // so this extension can fail gracefully on older VS Code builds.
  const lmApi = (vscode as unknown as { lm?: unknown }).lm as {
    registerMcpServerDefinitionProvider?: (
      providerId: string,
      provider: {
        provideMcpServerDefinitions: () => Promise<McpServerDefinition[]>;
      }
    ) => vscode.Disposable;
  } | undefined;

  if (!lmApi?.registerMcpServerDefinitionProvider) {
    console.warn('[azure-kernel-debugger] MCP registration API not available in this VS Code build.');
    return;
  }

  const providerDisposable = lmApi.registerMcpServerDefinitionProvider(
    'azureKernelDebugger.server',
    {
      provideMcpServerDefinitions: async () => [buildServerDefinition(context)]
    }
  );

  context.subscriptions.push(providerDisposable);

  // Trigger MCP refresh by prompting user to restart chat session when settings change.
  const configChangeDisposable = vscode.workspace.onDidChangeConfiguration((event) => {
    if (!event.affectsConfiguration('azureKernelDebugger')) {
      return;
    }

    void vscode.window.showInformationMessage(
      'Azure Kernel Debugger settings changed. Restart Copilot Chat (or reload window) to pick up the updated MCP server configuration.'
    );
  });

  context.subscriptions.push(configChangeDisposable);
}

async function installDependencies(context: vscode.ExtensionContext): Promise<void> {
  const config = getConfig();
  const requirementsPath = path.join(context.extensionPath, 'src', 'python', 'requirements.txt');

  const terminal = vscode.window.createTerminal({
    name: 'Azure Kernel Debugger Dependencies'
  });

  terminal.show(true);
  terminal.sendText(`"${config.pythonPath}" -m pip install -r "${requirementsPath}"`, true);
}

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const azInstalled = await isAzureCliInstalled();
  if (!azInstalled) {
    const selection = await vscode.window.showErrorMessage(
      'Azure CLI (az) is required for Azure Kernel Debugger. Install it before starting the MCP server.',
      'Install Azure CLI'
    );

    if (selection === 'Install Azure CLI') {
      await vscode.env.openExternal(vscode.Uri.parse('https://learn.microsoft.com/cli/azure/install-azure-cli'));
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand('azureKernelDebugger.installDependencies', async () => {
      await installDependencies(context);
    })
  );

  await registerMcpServerProvider(context);
}

export function deactivate(): void {
  // No-op. VS Code disposes subscriptions automatically.
}
