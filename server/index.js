const express = require('express');
const { getContacts } = require('./services');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (_req, res) => {
  res.send('Welcome to the contacts API!');
});

app.get('/api/contacts', (_req, res) => {
  getContacts()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.use((_req, res) => {
  const error = new Error('Not Found');

  res.status(404);
  res.json({
    message: 'Not Found',
    status: 404,
    data: null,
    ...error,
  });
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
