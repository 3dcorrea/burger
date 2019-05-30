var mysql = require('mysql');
var app = require("../server.js");
var connection;
var PORT = process.env.JAWSDB_URL || 3000;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
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