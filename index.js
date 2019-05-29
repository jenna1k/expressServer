const express = require('express');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.json([
    {
      key: 1,
      email: 'dajung@gmail.com',
      password: '1234',
      id: 'dajung',
      name: 'Dajung Kim',
    },
    {
      key: 2,
      email: 'anastasiya@gmail.com',
      password: '1234',
      id: 'anastasiya',
      name: 'Anastasiya Aliashkevich',
    },
    {
      key: 3,
      email: 'laura@gmail.com',
      password: '1234',
      id: 'laura',
      name: 'Laura Sochaczewski',
    },
    {
      key: 4,
      email: 'sarah@gmail.com',
      password: '1234',
      id: 'sarah',
      name: 'Sarah Wilsoncook',
    },
  ]);
});

app.get('/api/v1/users', (request, response) => {
  response.json([
    {
      key: 1,
      email: 'dajung@gmail.com',
      password: '1234',
      id: 'dajung',
      name: 'Dajung Kim',
    },
    {
      key: 2,
      email: 'anastasiya@gmail.com',
      password: '1234',
      id: 'anastasiya',
      name: 'Anastasiya Aliashkevich',
    },
    {
      key: 3,
      email: 'laura@gmail.com',
      password: '1234',
      id: 'laura',
      name: 'Laura Sochaczewski',
    },
    {
      key: 4,
      email: 'sarah@gmail.com',
      password: '1234',
      id: 'sarah',
      name: 'Sarah Wilsoncook',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at port ` + port);
});
