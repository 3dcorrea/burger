var Sequelize = require("sequelize");
var mysql = require('mysql');

var sequelize = new Sequelize("burgers_db", "root", "1111", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;