# Todo API with PostgreSQL

A RESTful Todo API built with Node.js, Express, and PostgreSQL. The project supports full CRUD operations with proper HTTP status codes, input validation, parameterized SQL queries, and error handling.

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

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg

---

## Project Structure

```
todo-api-postgresql
│
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Soumyajit-2808/todo-api-postgresql.git
```

Install dependencies

```bash
npm install
```

Start PostgreSQL.

Create a database named

```
todo_db
```

Create the table

```sql
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    status TEXT NOT NULL
);
```

Run the project

```bash
node server.js
```

The server runs on

```
http://localhost:3000
```

---

## API Endpoints

### Get all tasks

```
GET /tasks
```

### Get task by ID

```
GET /tasks/:id
```

### Create task

```
POST /tasks
```

Example Body

```json
{
	"name": "Learn Express",
	"status": "Pending"
}
```

### Update task

```
PUT /tasks/:id
```

### Delete task

```
DELETE /tasks/:id
```

---

## HTTP Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

---

## Future Improvements

- JWT Authentication
- User Accounts
- Docker
- Pagination
- Filtering
- Search
- Deployment
