var mysql = require('mysql');
var connection;
var PORT = process.env.PORT || 3000;

if (process.env.PORT) {
    connection = mysql.createConnection(process.env.PORT);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1111',
        database: 'burgers_db'
    });
}

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + '!');
});
module.exports = connection;