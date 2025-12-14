# React + TypeScript App Template

[![Coverage](https://codecov.io/gh/UlisesNiSchreiner/react_ts_web_app_template/branch/master/graph/badge.svg)](https://codecov.io/gh/UlisesNiSchreiner/react_ts_web_app_template)
![License](https://img.shields.io/badge/License-MIT-green)
![Node](https://img.shields.io/badge/Node-18%2B-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![Last Commit](https://img.shields.io/github/last-commit/UlisesNiSchreiner/react_ts_web_app_template)

A clean and production-ready starter template for building **React applications with TypeScript**.

- ⚡ Vite + React + TypeScript  
- ✅ Testing setup with Vitest & Testing Library (with coverage)  
- 🧹 ESLint, Prettier, Husky, lint-staged, and commitlint  
- 🚀 CI/CD using GitHub Actions + Codecov  
- 🧱 LibFlow (branching model tuned for product development)  
- 🐳 Production-optimized Dockerfile using Nginx — ready for load balancers (DigitalOcean, etc.)  

## 🔧 Core Scripts

| Command                 | Description |
|------------------------|-------------|
| `npm run dev`          | Start the development server (Vite) |
| `npm run build`        | Create an optimized production build |
| `npm run preview`      | Serve the production build locally |
| `npm run lint`         | Run ESLint |
| `npm run format`       | Format code using Prettier |
| `npm run typecheck`    | TypeScript type validation |
| `npm run test`         | Run unit tests (Vitest) |
| `npm run test:coverage`| Run tests with coverage reporting |

## 🧱 Project Structure

```
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

## 🐳 Docker (Production)

Build the container image:

```bash
docker build -t react-ts-app-template .
```

Run it locally:

```bash
docker run --rm -p 8080:80 react-ts-app-template
```

Open:

```
http://localhost:8080
```
