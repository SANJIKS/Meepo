# Этап сборки
FROM node:18 AS builder

WORKDIR /app

# Установка зависимостей
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY components.json tempo.config.json ./

# Удаляем эту строку — файла .npmrc нет
# COPY .npmrc ./

# Копируем остальной код
COPY ./src ./src
COPY ./public ./public
COPY index.html ./

# Установка и билд
RUN npm install
RUN npm run build

# Этап запуска
FROM nginx:alpine

# Копируем сборку
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
