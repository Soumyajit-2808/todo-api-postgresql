const express = require("express");
const { Pool } = require("pg");

const app = express();

app.use(express.json());

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "todo_db",
	password: "Password123!",
	port: 5432,
});

pool.connect()
	.then(() => {
		console.log("Connected to PostgreSQL");
	})
	.catch((err) => {
		console.error("Database connection failed:", err.message);
	});

const PORT = 3000;

app.get("/tasks", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM tasks");

		res.json(result.rows);
	} catch (err) {
		console.error(err);

		res.status(500).json({
			error: "Database Error",
		});
	}
});

app.get("/tasks/:id", async (req, res) => {
	try {
		const id = Number(req.params.id);
		const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [
			id,
		]);

		if (result.rows.length === 0) {
			return res.status(404).json({
				message: "Task not found",
			});
		}
		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);

		res.status(500).json({
			error: "Database Error",
		});
	}
});

app.post("/tasks", async (req, res) => {
	try {
		const { name, status } = req.body;

		const result = await pool.query(
			"INSERT INTO tasks (name, status) VALUES ($1, $2) RETURNING *",
			[name, status],
		);

		res.status(201).json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Database Error",
		});
	}
});

app.put("/tasks/:id", async (req, res) => {
	try {
		const id = Number(req.params.id);
		const { name, status } = req.body;
		const result = await pool.query(
			"UPDATE tasks SET name = $1, status = $2 WHERE id = $3 RETURNING *",
			[name, status, id],
		);
		if (result.rows.length === 0) {
			return res.status(404).json({
				message: "Task not found",
			});
		}
		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: "Database Error",
		});
	}
});

app.delete("/tasks/:id", async (req, res) => {
	try {
		const id = Number(req.params.id);
		const result = await pool.query(
			"DELETE FROM tasks WHERE id = $1 RETURNING *",
			[id],
		);
		if (result.rows.length === 0) {
			return res.status(404).json({
				message: "Task not found",
			});
		}
		res.json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).json({
			errer: "Database Error",
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
