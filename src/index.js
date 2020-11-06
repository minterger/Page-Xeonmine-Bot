const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');

//settings
const port = 3000;


//routes
app.use('/', routes)

//listen port
app.listen(port, () => {
  console.log('server on port = ', port);
});