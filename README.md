# 📦 Project Architecture

Структура проекта организована по модульному принципу.
Это позволяет разделить UI, бизнес-логику, конфигурацию и утилиты, что делает код более поддерживаемым и масштабируемым.

twitter/
│
├ public/                 # Статические файлы (иконки, изображения)
│
├ src/                    # Основной исходный код приложения
│
│ ├ app/                  # Роутинг и страницы Next.js (App Router)
│ │ ├ page.tsx            # Главная страница
│ │ ├ layout.tsx          # Основной layout приложения
│ │
│ ├ components/           # UI компоненты интерфейса
│ │ ├ Tweet
│ │ ├ Sidebar
│ │ └ PostForm
│ │
│ ├ shared/               # Общие ресурсы приложения
│ │ ├ ui/                 # переиспользуемые UI элементы
│ │ ├ hooks/              # кастомные React hooks
│ │ └ types/              # TypeScript типы
│ │
│ ├ config/               # Конфигурация приложения
│ │ ├ api.ts              # настройки API
│ │ ├ routes.ts           # список маршрутов
│ │ └ constants.ts        # глобальные константы
│ │
│ ├ lib/                  # Утилиты и вспомогательные функции
│ │ ├ utils.ts
│ │ ├ fetcher.ts
│ │ └ helpers.ts
│ │
│ ├ server-actions/       # Серверные действия (Next.js Server Actions)
│ │ ├ createTweet.ts
│ │ ├ deleteTweet.ts
│ │ └ auth.ts
│ │
│ ├ assets/               # Изображения, иконки, медиа
│ │
│ └ styles/               # Глобальные стили
│
├ package.json            # Зависимости и npm scripts
├ .gitignore              # Игнорируемые Git файлы
└ README.md               # Документация проекта
🚀 Getting Started

*Это проект на Next.js, созданный с помощью create-next-app.*

## Установка зависимостей
npm install
Запуск development сервера
npm run dev

или

`yarn dev`
`pnpm dev`
`bun dev`

### После запуска откройте в браузере:

http://localhost:3000
✏️ Development

*Главная страница проекта находится в:*

src/app/page.tsx

Next.js автоматически перезагружает страницу при изменении файлов.

⚡ Features Used

#### Проект использует возможности Next.js App Router:

⚡ Server Components

⚡ Server Actions

⚡ оптимизацию шрифтов через next/font

⚡ модульную архитектуру

Шрифт Geist автоматически оптимизируется с помощью Next.js.
