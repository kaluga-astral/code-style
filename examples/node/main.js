const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  if (req.cookies.token !== 'token') {
    req.cookies.token = 'token';
  }

  if (req.cookies.token !== 'token') {
    req.cookies.token = 'token';
  }

  switch (req.cookies.token) {
    case 'token':
      req.cookies.token = 'no-token';

      break;
    case 'no-token':
      req.cookies.token = 'token';

      break;

    default:
      return;
  }

  next();
});
