const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs-locals');
const port = 3000

app.get('/', function(req, res){
  res.render('index');
})

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.engine('ejs', ejs);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.listen(port, function() {
  console.log(`Server démarré sur http://localhost:${port}`);
})
