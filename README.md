# React + TypeScript App Template

Template para crear **aplicaciones React + TypeScript** listas para producción:

- ⚡ Vite + React + TypeScript
- ✅ Tests + Coverage (Vitest + Testing Library)
- 🧹 ESLint + Prettier + Husky + lint-staged + commitlint
- 🚀 CI/CD con GitHub Actions + Codecov
- 🧱 LibFlow (branching model orientado a producto)
- 🐳 Dockerfile optimizado (Nginx) para usar detrás de un load balancer (DigitalOcean, etc.)

## 🔧 Scripts principales

- `npm run dev` – servidor de desarrollo (Vite)
- `npm run build` – build de producción optimizado
- `npm run preview` – sirve el build localmente
- `npm run lint` – linting con ESLint
- `npm run format` – formateo con Prettier
- `npm run typecheck` – verificación de tipos con TypeScript
- `npm run test` – tests con Vitest
- `npm run test:coverage` – tests con coverage

## 🧱 Estructura del proyecto

```txt
.
├── src/
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   └── components/
│       └── AppShell.tsx
├── index.html
├── vite.config.ts
├── vitest.config.ts
├── vitest.setup.ts
├── .husky/
├── .github/workflows/
└── Dockerfile
```

## 🐳 Docker (Producción)

Build de la imagen:

```bash
docker build -t react-ts-app-template .
```

Run local:

```bash
docker run --rm -p 8080:80 react-ts-app-template
```

Luego abrí:

- `http://localhost:8080`
