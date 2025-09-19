# SendIt

## Описание

SendIt — современное веб-приложение для быстрой отправки и хранения сообщений. Проект состоит из фронтенда на React + Vite и бэкенда на Node.js + Express + Prisma.

## Структура проекта

```
apps/
  express-backend/    # Серверная часть (Express, Prisma, PostgreSQL)
  vite-frontend/      # Клиентская часть (React, Vite, Ant Design)
```

## Технологии

-   React, TypeScript, Vite
-   Ant Design
-   Express
-   Prisma ORM
-   PostgreSQL

## Быстрый старт

### 1. Клонирование репозитория

```sh
git clone <repo-url>
cd SendIt
```

### 2. Запуск фронтенда

```sh
cd apps/vite-frontend
pnpm install
pnpm run dev
```

Фронтенд будет доступен по адресу [http://localhost:5173](http://localhost:5173).

### 3. Запуск бэкенда

```sh
cd apps/express-backend
yarn install
# настройте .env с вашей строкой подключения к PostgreSQL
yarn run prisma:generate
yarn run prisma:migrate
yarn run dev
```

Бэкенд будет доступен по адресу [http://localhost:3001](http://localhost:3001).

## Переменные окружения

-   **Frontend**:  
    `VITE_BASE_URL` — адрес API бэкенда (по умолчанию: `http://localhost:3001/api`)
-   **Backend**:  
    `DATABASE_URL` — строка подключения к PostgreSQL
    `PORT` - порт