# Todo API with PostgreSQL

A RESTful Todo API built with **Node.js**, **Express.js**, and **PostgreSQL**. The project supports full CRUD operations with proper HTTP status codes, input validation, parameterized SQL queries, and error handling.

---

## Features

- Create a task
- Retrieve all tasks
- Retrieve a task by ID
- Update a task
- Delete a task
- Input validation
- Proper HTTP status codes
- PostgreSQL database integration
- Parameterized SQL queries to prevent SQL injection
- Environment variable support using `.env`

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv

---

## Project Structure

```text
todo-api-postgresql
│
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Soumyajit-2808/todo-api-postgresql.git
```

### 2. Navigate to the project directory

```bash
cd todo-api-postgresql
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Copy the `.env.example` file and rename it to `.env`.

Example:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_db
DB_PASSWORD=your_password
DB_PORT=5432

PORT=3000
```

Replace `your_password` with your PostgreSQL password.

---

### 5. Create the database

```sql
CREATE DATABASE todo_db;
```

---

### 6. Create the tasks table

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    status TEXT NOT NULL
);
```

---

### 7. Start the server

```bash
npm start
```

The server runs at:

```
http://localhost:3000
```

---

## API Endpoints

### Get all tasks

```http
GET /tasks
```

---

### Get task by ID

```http
GET /tasks/:id
```

---

### Create a task

```http
POST /tasks
```

Request Body

```json
{
	"name": "Learn Express",
	"status": "Pending"
}
```

---

### Update a task

```http
PUT /tasks/:id
```

Request Body

```json
{
	"name": "Learn PostgreSQL",
	"status": "Completed"
}
```

---

### Delete a task

```http
DELETE /tasks/:id
```

---

## HTTP Status Codes

| Status Code | Description           |
| ----------: | --------------------- |
|         200 | OK                    |
|         201 | Created               |
|         400 | Bad Request           |
|         404 | Not Found             |
|         500 | Internal Server Error |

---

## Environment Variables

This project uses environment variables for configuration.

Create a `.env` file using the `.env.example` template.

| Variable    | Description         |
| ----------- | ------------------- |
| DB_USER     | PostgreSQL username |
| DB_HOST     | Database host       |
| DB_NAME     | Database name       |
| DB_PASSWORD | PostgreSQL password |
| DB_PORT     | PostgreSQL port     |
| PORT        | Express server port |

---

## Security

- Database credentials are stored in `.env`.
- `.env` is ignored by Git using `.gitignore`.
- Parameterized SQL queries are used to help prevent SQL injection.

---

## Future Improvements

- User Authentication
- JWT Authorization
- Password Hashing (bcrypt)
- Pagination
- Search
- Filtering
- Docker Support
- Testing with Jest
- API Documentation using Swagger/OpenAPI
- Deployment

---

## Author

**Soumyajit Dutta**
