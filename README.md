# Blog UI

A full-stack blog application built with **Laravel 12** (backend API) and **Next.js 16** (frontend). Features CRUD operations for posts, category management, and a commenting system.

## Features

- 📝 **Posts** — Create, read, update, and delete blog posts
- 🏷️ **Categories** — Organize posts by categories
- 💬 **Comments** — Add and remove comments on posts
- 🎨 **Responsive UI** — Built with Tailwind CSS v4
- ⚡ **REST API** — Laravel-powered JSON API

## Tech Stack

| Layer      | Technology                                      |
| ---------- | ----------------------------------------------- |
| Frontend   | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Backend    | Laravel 12, PHP 8.2+                             |
| Database   | MySQL (configurable via `.env`)                  |

## Project Structure

```
blog-ui/
├── backend/           # Laravel API
│   ├── app/
│   │   ├── Http/Controllers/   # PostController, CommentController
│   │   └── Models/             # Post, Category, Comment
│   ├── database/migrations/    # Database schema
│   ├── routes/api.php          # API routes
│   └── ...
├── frontend/          # Next.js app
│   ├── app/
│   │   ├── admin/              # Admin dashboard & post management
│   │   ├── categories/         # Category pages
│   │   ├── components/         # Header, Footer, PostCard, PostList
│   │   └── posts/              # Post listing & detail pages
│   └── ...
└── README.md
```

## API Endpoints

| Method | Endpoint              | Description          |
| ------ | --------------------- | -------------------- |
| GET    | `/api/posts`          | List all posts       |
| POST   | `/api/posts`          | Create a post        |
| GET    | `/api/posts/{id}`     | Get a single post    |
| PUT    | `/api/posts/{id}`     | Update a post        |
| DELETE | `/api/posts/{id}`     | Delete a post        |
| POST   | `/api/comments`       | Create a comment     |
| DELETE | `/api/comments/{id}`  | Delete a comment     |

## Setup

### Prerequisites

- PHP 8.2+, Composer
- Node.js 20+, npm
- MySQL (or any DB supported by Laravel)

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Configure DB credentials in .env
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:3000` and the API on `http://localhost:8000`.

## License

MIT

<!-- [2024-03-02] feat: scaffold Laravel backend API routes for blog posts -->

<!-- [2024-03-02] feat: create Next.js blog UI layout and navigation -->

<!-- [2024-03-02] feat: implement post listing and detail view pages -->
