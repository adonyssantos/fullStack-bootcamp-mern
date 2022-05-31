const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.use((_req, res, next) => {
  const error = new Error('Not Found');

  res.status(404);
  res.json({
    message: 'Not Found',
    status: 404,
    data: null,
    ...error,
  });
  next(error);
});

app.use((err, _req, res, _next) => {
  const error = new Error(err.message);

  res.status(err.status || 500);
  res.json({
    message: err.message || 'Internal Server Error',
    status: err.status || 500,
    data: null,
    ...error,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
