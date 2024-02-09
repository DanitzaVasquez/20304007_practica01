const app = require('./api');

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on https://localhost:${port}`);
})