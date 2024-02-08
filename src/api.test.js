const request = require('supertest');
const app = require('./api'); 

// Test the /tasks GET endpoint
test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); // Assuming there are 2 tasks initially
});