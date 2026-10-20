# AP Consulting Tools

Fourteen dependency-free consulting tools for Aaron Pastrana Consulting.

- Live: https://aarondpana.github.io/Business-calculator/
- Repository: https://github.com/aarondpana/Business-calculator
- Hosting: GitHub Pages, automatically deployed from main by `.github/workflows/deploy.yml`.

## Tools

Sales & Client Acquisition: Lead Generation, Lead Scoring, CRM Lite, Proposal Generator.

Consulting & Business Diagnostics: Business Audit, Client Savings Estimator, AI Opportunity Finder, Client Profit Improvement, Client ROI.

Financial & Business Management: Consulting Pricing, Business Launch Service, Revenue Goal, Workload & Capacity, Cash Flow.

## Develop and verify

Use Node.js 22 or newer. No dependencies or install step are required.

```sh
npm test
npm run build
```

`dist/` is the static production source and output. All asset URLs are relative and navigation uses hashes, so the repository base path and refreshed routes need no rewrites. Release tags on changed UI assets avoid stale browser modules after an upgrade.

## Local data and financial conventions

Original calculator scenarios retain `ap-consulting-tools-v1`. New drafts and process rankings use `ap-consulting-tools-extension-v1`; CRM records use `ap-consulting-crm-v1`. Everything stays in the browser profile, does not synchronize across devices, and may be permanently lost if browser data is cleared. Local storage is not secure cloud storage. Use non-sensitive test data and export backups regularly. Clear-all requires confirmation; no client records are sent to GitHub or third-party APIs.

Defaults in the original calculators are fictional. All financial estimates are USD, not guarantees. New cash-savings estimates exclude capacity value and future cost avoidance. Scoring is a transparent heuristic, not a closing probability. The AI Opportunity Finder uses rules, not a trained model. Audit and proposal PDF export uses the browser print dialog; review the output before client delivery.

See [UPGRADE.md](UPGRADE.md) for model assumptions, storage limits, validation, browser checks and future cloud CRM requirements. No cloud backend is implemented.