const request = require('supertest');
const app = require('./api');

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});

// Test the /tasks POST endpoint
test('POST /tasks creates a new task', async () => {
  const newTask = { title: 'New Task', completed: false };
  try {
    const response = await request(app)
      .post('/tasks')
      .send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newTask.title);
    expect(response.body.completed).toBe(newTask.completed);
  } catch (error) {
    console.error('Error in POST /tasks:', error);
    throw error;
  }
});

// Test the /tasks/:id PUT endpoint
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const updatedTasks = tasksRepository.update(taskId, updatedTask);

  if (updatedTasks !== null) {
    res.json(updatedTasks);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Test the /tasks/:id DELETE endpoint
test('DELETE /tasks/:id deletes an existing task', async () => {
  const taskIdToDelete = 1;
  try {
    const response = await request(app).delete(`/tasks/${taskIdToDelete}`);

    expect(response.status).toBe(204); 
  } catch (error) {
    console.error('Error in DELETE /tasks/:id:', error);
    throw error;
  }
});
