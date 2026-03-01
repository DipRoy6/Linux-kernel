const state = {
  plans: [],
  sectors: [],
  companies: [],
  selectedPlan: 'single',
  selectedCompanyId: '',
  selectedSector: '',
};

const plansEl = document.getElementById('plans');
const planSelectorsEl = document.getElementById('planSelectors');
const companyGridEl = document.getElementById('companyGrid');
const detailsEl = document.getElementById('detailsPanel');
const sectorFilterEl = document.getElementById('sectorFilter');

async function getJson(url) {
  const res = await fetch(url);
  return res.json();
}

function planButton(plan) {
  const active = state.selectedPlan === plan.id ? 'active' : '';
  return `
    <div class="plan-card">
      <h3>${plan.name}</h3>
      <p>${plan.description}</p>
      <p><strong>${plan.price}</strong></p>
      <button class="${active}" data-plan="${plan.id}">Select Plan</button>
    </div>
  `;
}

function renderPlanSelectors() {
  let html = '';

  if (state.selectedPlan === 'single') {
    const options = state.companies
      .map((company) => `<option value="${company.id}">${company.name} (${company.sector})</option>`)
      .join('');

    html = `
      <label>Single company access
        <select id="companyPlanSelect">${options}</select>
      </label>
    `;
  }

  if (state.selectedPlan === 'sector') {
    const options = state.sectors
      .map(({ sector }) => `<option value="${sector}">${sector}</option>`)
      .join('');

    html = `
      <label>Sector access
        <select id="sectorPlanSelect">${options}</select>
      </label>
    `;
  }

  if (state.selectedPlan === 'all') {
    html = '<p class="muted">All sectors are unlocked. No additional selection required.</p>';
  }

  planSelectorsEl.innerHTML = html;

  const companyPlanSelect = document.getElementById('companyPlanSelect');
  if (companyPlanSelect) {
    companyPlanSelect.value = state.selectedCompanyId;
    companyPlanSelect.addEventListener('change', (e) => {
      state.selectedCompanyId = e.target.value;
    });
  }

  const sectorPlanSelect = document.getElementById('sectorPlanSelect');
  if (sectorPlanSelect) {
    sectorPlanSelect.value = state.selectedSector;
    sectorPlanSelect.addEventListener('change', (e) => {
      state.selectedSector = e.target.value;
    });
  }
}

function renderPlans() {
  plansEl.innerHTML = state.plans.map(planButton).join('');
  plansEl.querySelectorAll('button[data-plan]').forEach((button) => {
    button.addEventListener('click', (e) => {
      state.selectedPlan = e.target.dataset.plan;
      renderPlans();
      renderPlanSelectors();
    });
  });
}

function renderCompanies(companies) {
  companyGridEl.innerHTML = companies
    .map(
      (company) => `
      <article class="company-card">
        <h3>${company.name}</h3>
        <p>${company.category}</p>
        <small>${company.sector} • ${company.stage}</small>
        <p><span class="badge">Momentum: ${company.momentum}</span></p>
        <button data-company-id="${company.id}">View Details</button>
      </article>
    `
    )
    .join('');

  companyGridEl.querySelectorAll('button[data-company-id]').forEach((button) => {
    button.addEventListener('click', () => fetchCompanyDetails(button.dataset.companyId));
  });
}

function queryForPlan() {
  const params = new URLSearchParams({ plan: state.selectedPlan });
  if (state.selectedPlan === 'single') params.set('selectedCompany', state.selectedCompanyId);
  if (state.selectedPlan === 'sector') params.set('selectedSector', state.selectedSector);
  return params.toString();
}

async function fetchCompanyDetails(companyId) {
  const res = await fetch(`/api/company/${companyId}?${queryForPlan()}`);
  const payload = await res.json();

  if (!res.ok) {
    detailsEl.innerHTML = `
      <h2>Company Insights</h2>
      <p class="muted">${payload.error}</p>
      <p class="muted">Tip: pick a matching plan selection for this company.</p>
    `;
    return;
  }

  detailsEl.innerHTML = `
    <h2>${payload.name}</h2>
    <p><strong>${payload.sector}</strong> • ${payload.category} • ${payload.stage}</p>
    <p><strong>HQ:</strong> ${payload.headquarters} | <strong>Employees:</strong> ${payload.employees}</p>
    <p><strong>Business Research:</strong> ${payload.businessResearch}</p>
    <p><strong>Peer Insight:</strong> ${payload.peerInsight}</p>
    <p><strong>Website:</strong> <a href="${payload.website}" target="_blank" rel="noreferrer">${payload.website}</a></p>
    <h3>Executive Contacts</h3>
    <ul>
      ${payload.executives
        .map(
          (exec) => `<li><strong>${exec.name}</strong>, ${exec.title}<br/>Email: ${exec.email}<br/><a href="${exec.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a></li>`
        )
        .join('')}
    </ul>
  `;
}

async function init() {
  const [plans, sectors, companies] = await Promise.all([
    getJson('/api/plans'),
    getJson('/api/sectors'),
    getJson('/api/companies'),
  ]);

  state.plans = plans;
  state.sectors = sectors;
  state.companies = companies;
  state.selectedCompanyId = companies[0]?.id || '';
  state.selectedSector = sectors[0]?.sector || '';

  renderPlans();
  renderPlanSelectors();

  sectorFilterEl.innerHTML = [
    '<option value="all">All sectors</option>',
    ...sectors.map(({ sector, companyCount }) => `<option value="${sector}">${sector} (${companyCount})</option>`),
  ].join('');

  sectorFilterEl.addEventListener('change', async (e) => {
    const sector = e.target.value;
    const filtered = await getJson(`/api/companies?sector=${encodeURIComponent(sector)}`);
    renderCompanies(filtered);
  });

  renderCompanies(companies);
}

init();
