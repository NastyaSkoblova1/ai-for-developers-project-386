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

- `GET /event-types` — список типов событий
- `GET /event-types/:id/slots` — свободные слоты на 14 дней
- `POST /bookings` — создать бронирование (возвращает 409 при конфликте)
- `GET /admin/owner` — профиль владельца
- `GET|POST /admin/event-types` — CRUD типов событий
- `GET /admin/bookings` — список всех бронирований
