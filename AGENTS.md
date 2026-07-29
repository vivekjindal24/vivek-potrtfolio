# AGENTS.md — Vivek Portfolio

## Commands
- `npm run dev` — Vite dev server (port 5173)
- `npm run build` — `tsc && vite build` (typecheck + build, **must pass lint/type-check first in CI**)
- `npm run lint` — ESLint, `--max-warnings 0`
- `npm run type-check` — `tsc --noEmit`
- `npm run format` — Prettier (src/**/*.{ts,tsx,css,json})
- `npm test` — Vitest
- `npm run test:ui` — Vitest with UI
- `npm test -- --coverage` — coverage
- `npm run test:e2e` — Playwright (builds first via `pretest:e2e`)
- CI gate: `lint -> type-check -> test -> build` (see deploy.yml)
- Path alias `@/*` → `./src/*`

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx` (React Router w/ AnimatePresence)
- **State**: TanStack Query (5min staleTime, no refetchOnFocus) + Zustand
- **Dark mode**: CSS class strategy, `ThemeProvider` at root
- **PWA**: Auto-update via `vite-plugin-pwa`, Workbox cache-first for Google Fonts

## Testing quirks
- Vitest: jsdom env, setup in `src/test/setup.ts` (mocks IntersectionObserver for framer-motion)
- E2E: Playwright starts `vite preview --port=4173`; `reuseExistingServer: true`
- E2E contact form test is fire-and-forget (no real EmailJS in CI)

## Deployment
- **Primary**: Vercel via `deploy.yml` — needs `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets
- **Secondary**: Azure SWA via `azure-static-web-apps-*.yml` — needs `AZURE_STATIC_WEB_APPS_API_TOKEN`
- `staticwebapp.config.json` has SPA fallback + security headers for Azure SWA
- Build requires `VITE_EMAILJS_*` env vars in CI

## Env
- Copy `.env.example` → `.env`; only `VITE_EMAILJS_*` are required
- `VITE_CONTACT_ENDPOINT_URL` is optional Google Apps Script fallback

## Graphify
- CLAUDE.md describes `graphify query/path/explain` workflow from `graphify-out/` (currently empty)
- Run `graphify update .` after code changes

## Agent skills
- Repository-local agent skills in `agent/skills/`: caveman suite, cavecrew, find-skills
