const express = require('express');
const bodyParser = require('body-parser');
const tasksRepository = require("./tasksRepository");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  const tasks = tasksRepository.getAll();
  res.json(tasks);
});

// Get a specific task
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasksRepository.getById(taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Create a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasksRepository.create(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const task = tasksRepository.update(taskId, updatedTask);

  if (task != null) {
    res.json(tasksRepository.getAll());
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasksRepository.delete(taskId);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
