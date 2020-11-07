const express = require('express')
const app = express.Router()

// Routes
app.get('/', (req, res) => {
    res.render('index.html', { title: 'Xeonmine', index: 'active', comandos: '', sobremi: '' })
  })

app.get('/comandos', (req, res) => {
    res.render('comandos.html', { title: 'Xeonmine - Comandos', index: '', comandos: 'active', sobremi: '' })
  })

app.get('/sobremi', (req, res) => {
    res.render('sobremi.html', { title: 'Xeonmine - Sobre Mi', index: '', comandos: '', sobremi: 'active' })
  })

module.exports = app