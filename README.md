# Mark Zhao — personal website
Based on [Astro Theme Scholars](https://github.com/jxpeng98/astro-theme-scholars).
Navigation: About · Projects · Research · Photography · CV.

## Local development
Use Node 22.13+ and pnpm. Run `pnpm install --frozen-lockfile`, then `pnpm dev`.

## Content
- Identity, links, navigation: `site.config.ts`. Confirm display name Mark Zhao.
- Experience and education: `src/data/about.yml`.
- Projects: `src/content/projects/*.md`. Complete the draft and set `draft: false`.
- Papers: `src/data/publications.bib`. Use `public = {yes}`, `{wp}`, or `{wip}`.
- Photos: add compressed images under `public/photography/` and entries in `src/data/photography.ts`. Set `photographyWebsite` to link a separate photography site.
- CV: add `public/cv.pdf`; the download link appears on the next build.
- Portrait: replace `public/profile.svg` or change the configuration.

No example publications or employment are presented as personal work. Writing is disabled.

## Deploy
Push to main; the Pages workflow builds and deploys. Settings → Pages → GitHub Actions.
Website: https://mark-myzhao.github.io

## Validation
Run `pnpm test`, `pnpm astro check`, and `pnpm build`.
Upstream full verify contains demo-specific assertions; original docs and tests remain for reference.
Upstream release/template update workflows were removed; review updates manually.
