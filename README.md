# AP Consulting Tools

Eight dependency-free calculators. Open `dist/index.html` through any static host. All assets use relative paths and calculators use URL hashes, so `/Business-calculator/` needs no rewrite or base-path changes. Nothing depends on a local server after deployment. No external requests, fonts, libraries, accounts, or database.

## Check

Install Node.js 22 or newer. No npm install is needed.

```sh
npm test
npm run build
```

`dist/` is the production source and output; the build validates its required files.

## Publish free on GitHub Pages

The connected tools cannot create repositories or configure Pages. Follow these exact steps:

1. Sign in to GitHub. Click **New repository**, name it **Business-calculator**, choose **Public** for free Pages hosting, and create it without a README.
2. In this folder, run the following (replace YOUR-USERNAME with your GitHub username):

```sh
git init -b main
git add .
git commit -m "Build AP Consulting Tools"
git remote add github https://github.com/YOUR-USERNAME/Business-calculator.git
git push -u github main
```

If this folder already has a Sites Git repository, skip `git init`; use `git branch -M main` before pushing. Keep the Sites remote separate from the GitHub remote.

3. In the GitHub repository, open **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions → Deploy calculators to GitHub Pages → Run workflow** on main. Subsequent pushes to main deploy automatically.
5. After deployment succeeds, open `https://YOUR-USERNAME.github.io/Business-calculator/`.

## Financial conventions

All defaults are fictional examples, currency is USD, and forecasts are estimates. Input percentages are 0–100; improvements are shown in percentage points. Zero denominators display “Not attainable”. Negative profit, cash, ROI, and remaining capacity are retained. Monthly capacity uses 52/12 weeks. ROI assumes no benefits during ramp-up and upfront software expenses; ongoing costs must already be deducted from entered monthly benefit. Cash flow uses expected dates, recurring monthly expenses and two payments against aggregate contract value; it does not claim to predict exact intra-month liquidity.

Inputs are stored only under the `ap-consulting-tools-v1` localStorage key. **Clear saved data** removes that key. No client names or sensitive information are needed. Clipboard fallback provides selectable text if clipboard permission is unavailable.
