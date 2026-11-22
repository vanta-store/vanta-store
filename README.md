# VANTA Fashion Store

A Persian RTL fashion storefront built with React, Vite and local product photography.

## Run locally

```powershell
npm install
npm run dev
```

## Build locally

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `vanta-store`).
2. Upload/push the **contents of this project folder** to the repository root. Do not upload `node_modules/` or `dist/`.
3. Open **Settings → Pages** in the repository.
4. Set **Build and deployment → Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy VANTA to GitHub Pages** to finish successfully.
6. Your site URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` for a normal project repository.

The included workflow builds the Vite app and publishes `dist/` automatically on every push to `main`. The Vite base path is detected from the GitHub repository name, so you do not need to manually edit it when naming your repository. For a user/org Pages repository ending in `.github.io`, the root path is used automatically.

A generated `dist/404.html` supports client-side React Router URLs on GitHub Pages, and all product images are local files under `public/images/`.

## Important

GitHub Pages is static hosting. The checkout is a demonstration and does not process real payments or store orders on a server. The cart is stored in the visitor's browser.
