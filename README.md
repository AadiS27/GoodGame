# Book Directory CRUD API

A clean Node.js Express app for managing a book directory with CRUD operations.

## Features
- List all books
- Get a book by ID
- Add a new book
- Update a book
- Delete a book

## Usage
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the server:
   ```powershell
   npm start
   ```
3. API Endpoints:
   - `GET /books` — List all books
   - `GET /books/:id` — Get book by ID
   - `POST /books` — Add a book (`{ "title": "", "author": "" }`)
   - `PUT /books/:id` — Update a book
   - `DELETE /books/:id` — Delete a book

## Structure
- `src/app.js` — Main app entry
- `src/routes/books.js` — Book routes
- `src/controllers/booksController.js` — CRUD logic

---
You can push this project to your own GitHub repo for review.
