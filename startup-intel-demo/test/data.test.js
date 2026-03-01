const test = require('node:test');
const assert = require('node:assert/strict');
const { startupIntel } = require('../data/startups');

test('dataset has at least 10 sectors', () => {
  const sectors = new Set(startupIntel.map((company) => company.sector));
  assert.ok(sectors.size >= 10);
});

test('all companies include minimum required fields', () => {
  for (const company of startupIntel) {
    assert.ok(company.id);
    assert.ok(company.name);
    assert.ok(company.sector);
    assert.ok(company.executives.length > 0);
    assert.ok(company.businessResearch);
    assert.ok(company.peerInsight);
  }
});
