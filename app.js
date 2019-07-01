const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const jwt = require('jsonwebtoken');

app.get('/', (req, res) => {
  res.status(200).send('welcome');
});

app.post('/api/v1/login', (req, res) => {
  //mock user
  const user = {
    username: 'admin',
    email: 'admin@gmail.com',
    id: 1,
  };

  //create JWT
  const token = jwt.sign(
    {
      user: user,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30s',
    },
  );

  //send
  res.json({
    message: 'Authentication success',
    token: token,
  });
});

app.post('/api/v1/profiles', middlewareToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.json({
        message: 'profile created....',
        authData,
      });
    }
  });
});

function middlewareToken(req, res, next) {
  //read header from req
  let bearer = req.headers.authorization;
  console.log('header', bearer);
  bearer = bearer.split(' ');
  //extract Token
  const bearerToken = bearer[1];
  //validation
  if (bearerToken) {
    //assign req.token
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
  //if Token is missing send Forbiden
}

app.listen(port, err => {
  if (err) {
    throw new Error('error!');
  } else {
    console.log(`Express server is running on ${port}`);
  }
});
