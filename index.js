const express = require('express');


const app = express();
const port = process.env.PORT;

app.get('', (req, res) => {
  res.send('<h1>Hello There</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

app.get('/help', (res, req) => {
  res.send('<h1>Help page</h1>');
})

app.listen(port, () => console.log('port ', port))
