# Fourteen-tool upgrade

The original eight calculators and `ap-consulting-tools-v1` storage remain. Six new tools extend the existing static modules; there is no backend, API, analytics, or dependency install. `.github/workflows/deploy.yml` remains the Pages deployment workflow. `dist/` is production source/output and relative URLs plus hash navigation support `/Business-calculator/` and refreshes without server rewrites.

## Local records

- `ap-consulting-tools-extension-v1`: version 1 drafts, linked local lead IDs, and up to 100 process assessments.
- `ap-consulting-crm-v1`: version 1 directory of up to 1,000 leads.
- Records are in the current browser profile only. They do not sync, are not encrypted cloud storage, and can be lost permanently if browser data is cleared. Use only non-sensitive test data and export backups.
- CRM JSON supports validated merge or explicit replacement; duplicate IDs reject merges. CSV neutralizes spreadsheet formula prefixes. Draft imports strip unknown fields and validate types, dates, ranges, and enums. Opportunity exports include their process ranking. Malformed persisted records are retained for raw recovery export rather than silently overwritten.
- Global clear requires confirmation and removes the three application keys only. Tool reset retains CRM records and saved process rankings; CRM has a separate confirmed clear action.
- Cross-tool actions preview field changes and ask for confirmation. Existing unrelated values remain. Copy and exports occur only when requested; no stored client information is uploaded to GitHub.

## Models and reports

Audit, scoring, opportunity and savings methods are displayed beside inputs and in reports. Missing ratings produce normalized provisional scores with weighted coverage; weights must total 100. Scoring is a subjective decision aid, not a closing probability. Opportunity Finder is rules-based, not an AI model. Sensitivity and specialist departments gate recommendations. Savings keeps capacity value and future cost avoidance out of realized cash benefits, with a non-overlapping expense pool and explicit payroll reduction.

Audits reuse the original profit calculator only when six impact inputs exist. Mini mode opens discovery sections; comprehensive mode expands all sections. Proposal presets remain editable, introduce no client achievements, and are discussion proposals, not approved legal contracts. Print/PDF uses the browser's Print → Save as PDF. Audit evidence sections expand for printing. Browser rendering and print output must be reviewed before client delivery.

## Future cloud CRM (not implemented)

`makeRepository` in `dist/tool-logic.mjs` separates record persistence from UI. A future remote adapter must provide asynchronous loading, authenticated sessions, expired-session handling, and conflict-safe mutations. Add a secure server endpoint rather than placing database/service credentials in static source. Evaluate managed Postgres or a managed document store with backups based on retention, regional privacy requirements, and cost; no provider is selected or installed here.

Require per-user or per-tenant ownership on every record and enforce authorization on the server or database. Use row-level rules/policies for reads, inserts, updates, and deletes; client-side filtering is insufficient. Use minimal public client credentials where supported and keep privileged secrets server-side. Define consent, data minimization, retention/deletion, encryption in transit/at rest, least privilege, incident response, export controls, and audit logging without confidential record content. Plan automated backups, tested restore procedures, recovery objectives, and account deletion. Cloud hosting, authentication, database, email, monitoring, and backup usage may create recurring costs and require approval before implementation.

## Verification

Run `npm test` and `npm run build`; no install is required. Original default/output fixtures were recorded before modification. Automated checks cover the eight calculators, savings, scoring, audit impact reuse, opportunity rules, schema validation, CRM import/export/atomic persistence, dashboard totals, category membership, and relative imports. Browser QA requires a reachable preview; local navigation was unavailable in this session, so actual mobile rendering, clipboard, print, and end-to-end transfer interactions are not claimed as passing.
