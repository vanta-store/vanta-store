import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Actions exposes GITHUB_REPOSITORY as owner/repository.
// Project Pages need /repository/; user/org Pages live at the domain root.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgPage = repositoryName?.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserOrOrgPage
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  base,
  plugins: [react()],
});
