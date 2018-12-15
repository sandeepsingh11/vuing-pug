var express = require('express');
var app = express();
var server = require('http').Server(app);
const pug = require('pug');


const port = process.env.PORT || 8080;

// app.use(express.static('./'));

// default to 'views' directory
app.set('views', './views');
app.set('view engine', 'pug');

// go to index.pug with these values
app.get('/', function (req, res) {
  res.render('index', { title: 'Vue Pug', message: 'Hewwo!' })
})


server.listen(port, function(){
	console.log('listening on ' + port);
});