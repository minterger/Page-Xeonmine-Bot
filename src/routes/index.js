const path = require('path')
const express = require('express');
const app = express.Router();

// Routes
app.get('/', (req, res) => {
    res.render('index.html', { index: 'active', comandos: '', sobremi: '' });
  })

app.get('/comandos', (req, res) => {
    res.render('comandos.html', { index: '', comandos: 'active', sobremi: '' });
  })

app.get('/sobremi', (req, res) => {
    res.render('sobremi.html', { index: '', comandos: '', sobremi: 'active' });
  })

module.exports = app;