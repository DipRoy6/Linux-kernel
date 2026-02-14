"""MCP server scaffold for Azure Linux kernel serial-console debugging.

Replace the placeholder command execution logic in execute_serial_command and
read_boot_logs with your existing serial-console workflow.
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from dataclasses import dataclass

from mcp.server.fastmcp import FastMCP


@dataclass
class AzureTarget:
    subscription: str
    resource_group: str
    vm_name: str


def _validate_azure_login() -> tuple[bool, str]:
    """Validate the Azure CLI login context before handling tool requests."""
    try:
        result = subprocess.run(
            ["az", "account", "show"],
            check=True,
            capture_output=True,
            text=True,
        )
        return True, result.stdout.strip()
    except FileNotFoundError:
        return (
            False,
            "Azure CLI (az) was not found on PATH. Install it: "
            "https://learn.microsoft.com/cli/azure/install-azure-cli",
        )
    except subprocess.CalledProcessError as exc:
        stderr = (exc.stderr or "").strip()
        return (
            False,
            "Azure CLI authentication failed. Run 'az login' and ensure the active "
            "subscription is accessible. Details: "
            f"{stderr}",
        )


def create_server(target: AzureTarget) -> FastMCP:
    server = FastMCP("azure-kernel-debugger")

    @server.tool()
    async def execute_serial_command(command: str) -> str:
        """Execute a command through Azure serial console (placeholder implementation)."""
        ok, message = _validate_azure_login()
        if not ok:
            return f"ERROR: {message}"

        # TODO: Inject your existing Azure serial-console command dispatch logic here.
        # This placeholder intentionally does not execute user commands yet.
        return (
            "execute_serial_command placeholder reached. "
            f"Target={target.resource_group}/{target.vm_name}, Command={command!r}"
        )

    @server.tool()
    async def read_boot_logs() -> str:
        """Read VM boot logs from Azure serial console (placeholder implementation)."""
        ok, message = _validate_azure_login()
        if not ok:
            return f"ERROR: {message}"

        # TODO: Inject your existing serial boot-log collection logic here.
        return (
            "read_boot_logs placeholder reached. "
            f"Target={target.resource_group}/{target.vm_name}"
        )

    return server


def parse_args(argv: list[str]) -> AzureTarget:
    parser = argparse.ArgumentParser(description="Azure Kernel Debugger MCP server")
    parser.add_argument("--subscription", required=True, help="Azure subscription ID")
    parser.add_argument("--resource-group", required=True, help="Azure resource group name")
    parser.add_argument("--vm-name", required=True, help="Azure virtual machine name")

    args = parser.parse_args(argv)
    return AzureTarget(
        subscription=args.subscription,
        resource_group=args.resource_group,
        vm_name=args.vm_name,
    )


def main(argv: list[str]) -> int:
    target = parse_args(argv)

    ok, message = _validate_azure_login()
    if not ok:
        print(f"[azure-kernel-debugger] {message}", file=sys.stderr)

    server = create_server(target)
    server.run()
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
