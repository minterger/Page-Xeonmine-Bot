const express = require('express');

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });

app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/account.html'));
  });