const express = require("express");
const db = require("../database");
const router = express.Router();

// Add task
router.post("/", (req, res) => {
  const { title, description, deadline } = req.body;
  db.run(
    "INSERT INTO tasks (title, description, deadline) VALUES (?, ?, ?)",
    [title, description, deadline],
    () => res.json({ message: "Task added" })
  );
});

// Get all tasks
router.get("/", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    res.json(rows);
  });
});

// Update task
router.put("/:id", (req, res) => {
  db.run(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    [req.body.completed ? 1 : 0, req.params.id],
    () => res.json({ message: "Task updated" })
  );
});

// Delete task
router.delete("/:id", (req, res) => {
  db.run(
    "DELETE FROM tasks WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Task deleted" })
  );
});

module.exports = router;