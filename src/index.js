const path = require('path');
const ejs = require('ejs');
const express = require('express');
const app = express();
const routes = require('./routes');

//settings+
app.set('port', 80);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//listen port
app.listen(app.get('port'), () => {
  console.log('server on port = ', app.get('port'));
});