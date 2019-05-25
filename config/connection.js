var mysql = require('mysql');
var connection;
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

module.exports = connection;