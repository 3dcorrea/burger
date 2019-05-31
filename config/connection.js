var mysql = require('mysql');
var app = require("../server.js");
var connection;

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

module.exports = connection;