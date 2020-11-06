const path = require('path')
const express = require('express');
const app = express.Router();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  })

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/account.html'));
  })

module.exports = app;