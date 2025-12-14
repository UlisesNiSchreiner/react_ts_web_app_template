# Etapa de build: Vite + React
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY tsconfig.json vite.config.ts vitest.config.ts vitest.setup.ts .eslintrc.cjs .prettierrc ./
COPY src ./src
COPY index.html ./

RUN npm run build

# Etapa de runtime: Nginx sirviendo archivos estáticos
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Borra el default config y agrega uno optimizado
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist ./dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]