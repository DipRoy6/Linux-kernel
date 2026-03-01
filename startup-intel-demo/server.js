const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');
const { URL } = require('node:url');
const { startupIntel } = require('./data/startups');

const PORT = Number(process.env.PORT) || 3000;
const publicDir = path.join(__dirname, 'public');

const allSectors = [...new Set(startupIntel.map((company) => company.sector))].sort();

function hasAccess(company, plan, selectedCompany, selectedSector) {
  if (plan === 'all') return true;
  if (plan === 'single') return company.id === selectedCompany;
  if (plan === 'sector') return company.sector === selectedSector;
  return false;
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function serveStatic(reqPath, res) {
  let safePath = reqPath === '/' ? '/index.html' : reqPath;
  safePath = safePath.replace(/\.\./g, '');
  const filePath = path.join(publicDir, safePath);

  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath);
    const types = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
    };

    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain; charset=utf-8' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${PORT}`);
  const { pathname, searchParams } = requestUrl;

  if (pathname === '/api/sectors') {
    const sectorSummary = allSectors.map((sector) => ({
      sector,
      companyCount: startupIntel.filter((company) => company.sector === sector).length,
    }));
    sendJson(res, 200, sectorSummary);
    return;
  }

  if (pathname === '/api/companies') {
    const sector = searchParams.get('sector');
    let companies = startupIntel;

    if (sector && sector !== 'all') {
      companies = startupIntel.filter((company) => company.sector === sector);
    }

    const listView = companies.map((company) => ({
      id: company.id,
      name: company.name,
      sector: company.sector,
      category: company.category,
      stage: company.stage,
      momentum: company.momentum,
    }));

    sendJson(res, 200, listView);
    return;
  }

  if (pathname.startsWith('/api/company/')) {
    const id = pathname.replace('/api/company/', '');
    const plan = searchParams.get('plan') || 'none';
    const selectedCompany = searchParams.get('selectedCompany') || '';
    const selectedSector = searchParams.get('selectedSector') || '';

    const company = startupIntel.find((item) => item.id === id);
    if (!company) {
      sendJson(res, 404, { error: 'Company not found' });
      return;
    }

    if (!hasAccess(company, plan, selectedCompany, selectedSector)) {
      sendJson(res, 403, {
        error: 'Upgrade your plan to unlock this company profile.',
        requiredPlan: 'single, sector or all',
      });
      return;
    }

    sendJson(res, 200, company);
    return;
  }

  if (pathname === '/api/plans') {
    sendJson(res, 200, [
      {
        id: 'single',
        name: 'Single Company',
        description: 'Unlock one startup profile and all associated executive insights.',
        price: '$49 / month',
      },
      {
        id: 'sector',
        name: 'Sector Access',
        description: 'Access every startup in one chosen sector.',
        price: '$199 / month',
      },
      {
        id: 'all',
        name: 'All Sectors',
        description: 'Full access to every startup and sector intelligence profile.',
        price: '$499 / month',
      },
    ]);
    return;
  }

  serveStatic(pathname, res);
});

server.listen(PORT, () => {
  console.log(`Startup intel demo is running at http://localhost:${PORT}`);
});
