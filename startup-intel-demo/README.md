# SignalDesk Demo (Startup Executive Intelligence)

This is a simple full-stack demo app you can run locally on your laptop.

## What this demo includes

- A professional single-page web UI with:
  - sector-wise startup browsing
  - plan-based access control
  - detailed company insight panels (executives, employee count, research notes, peer insights)
- A lightweight Node.js backend API with mock data.
- 10 startup sectors with sample companies and executive profile data for demos.

## Tech stack

- Backend: Node.js built-in `http` server
- Frontend: HTML/CSS/Vanilla JavaScript
- Data: local JS dataset (`data/startups.js`)

## Prerequisites

1. Install Node.js 18+ (Node 20+ recommended).
2. Confirm your environment:

```bash
node -v
npm -v
```

> This project uses only built-in Node modules, so no `npm install` is required.

## Step-by-step: run locally

1. Open a terminal and move to the app folder:

```bash
cd startup-intel-demo
```

2. Start the server:

```bash
npm start
```

3. You should see:

```text
Startup intel demo is running at http://localhost:3000
```

4. Open your browser:

```text
http://localhost:3000
```

5. Demo the access model in the UI:
   - Select **Single Company**, choose a company, click **View Details** (should allow).
   - Click a different company (should show upgrade/access message).
   - Switch to **Sector Access**, choose a sector, validate multiple company access.
   - Switch to **All Sectors** and verify unrestricted access.

## Step-by-step: test locally

### 1) Run automated tests

From `startup-intel-demo/`:

```bash
npm test
```

Expected: 2 tests passing.

### 2) Optional API smoke checks

Keep the app running in one terminal (`npm start`), then in another terminal:

```bash
# list sectors
curl -s http://localhost:3000/api/sectors

# list all companies
curl -s http://localhost:3000/api/companies

# allowed example (single-company plan)
curl -s "http://localhost:3000/api/company/fin-ai-ledgerflow?plan=single&selectedCompany=fin-ai-ledgerflow"

# blocked example (single-company plan mismatch)
curl -s "http://localhost:3000/api/company/fin-paymesh?plan=single&selectedCompany=fin-ai-ledgerflow"
```

## API endpoints

- `GET /api/plans`
- `GET /api/sectors`
- `GET /api/companies?sector=all|<sectorName>`
- `GET /api/company/:id?plan=single|sector|all&selectedCompany=<id>&selectedSector=<sector>`

## Troubleshooting

- **Port already in use**: run with a different port:

```bash
PORT=3001 npm start
```

Then open `http://localhost:3001`.

- **Blank page / stale assets**: hard refresh browser (`Ctrl+Shift+R` / `Cmd+Shift+R`).
- **Tests fail**: ensure you are in `startup-intel-demo/` before running `npm test`.

## Notes on data

The dataset is intended for demonstration purposes and combines synthetic contact info with realistic startup categories and market-style insight summaries.
