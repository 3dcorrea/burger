var express = require('express');
var app = express();
app.use(express.static(process.cwd() + '/public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

var port = process.env.JAWSDB_URL || 3000;
app.listen(port);
module.exports = app;