### Hexlet tests and linter status:
[![Actions Status](https://github.com/NastyaSkoblova1/ai-for-developers-project-386/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NastyaSkoblova1/ai-for-developers-project-386/actions/workflows/hexlet-check.yml)

## Backend

Реализован на Node.js + TypeScript + Fastify. Использует in-memory хранилище: все данные хранятся внутри процесса и сбрасываются после перезапуска сервера.

### Структура

- `src/server.ts` — точка входа, запуск сервера
- `src/app.ts` — инициализация Fastify + CORS
- `src/routes/public.ts` — публичные endpoint’ы для гостей
- `src/routes/admin.ts` — административные endpoint’ы владельца
- `src/storage/memory-store.ts` — in-memory хранилище
- `src/storage/seed.ts` — seed-данные (owner, 3 event types)
- `src/services/` — бизнес-логика

### Команды

```bash
# Установка зависимостей
npm install

# Режим разработки (с hot-reload)
npm run dev

# Сборка
npm run build

# Запуск собранного приложения
npm start

# Проверка типов
npm run typecheck
```

### Переменные окружения

Скопируй `.env.example` в `.env` и при необходимости измени:

```env
PORT=3000
HOST=0.0.0.0
FRONTEND_ORIGIN=http://localhost:5173
```

### API

- `GET /api/event-types` — список типов событий
- `GET /api/event-types/:id/slots` — свободные слоты на 14 дней
- `POST /api/bookings` — создать бронирование (возвращает 409 при конфликте)
- `GET /api/admin/owner` — профиль владельца
- `GET|POST /api/admin/event-types` — CRUD типов событий
- `GET /api/admin/bookings` — список всех бронирований

## Docker

Собрать и запустить локально:

```bash
docker build -t meeting-app .
docker run --rm -e PORT=3000 -e HOST=0.0.0.0 -p 3000:3000 meeting-app
```

Приложение откроется на http://localhost:3000. Frontend и backend работают в одном контейнере.

## Production deployment

- **Платформа:** Render (Web Service, Docker runtime)
- **Конфигурация:** `render.yaml` в корне репозитория
- **Схема:** один Docker-контейнер, в котором Fastify раздаёт собранный frontend (`frontend/dist`) и API
- **Порт:** приложение использует переменную окружения `PORT`
- **Данные:** in-memory (хранятся в процессе и сбрасываются при перезапуске контейнера)

Для деплоя:
1. Запушьте изменения в `main`
2. В Render Dashboard: **New Web Service** → выберите репозиторий → **Runtime: Docker** → **Deploy**

**Публичная ссылка:** *(заполнить после деплоя)*
