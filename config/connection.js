// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require('mysql2');

//Connection to heroku Jawsdb
if (process.env.q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com) {
    RTCPeerConnection = mysql.createConnection(process.env.q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Chicago13',
        database: 'burgers_db'
    });
};

connection.connect();
module.exports = connection;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burger_db", "root", "Chicago13", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;