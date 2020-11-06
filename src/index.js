const path = require('path');
const express = require('express');
const app = express();

//settings
const port = 3000;


//routes


//listen port
app.listen(port, () => {
  console.log('server on port = ', port);
});