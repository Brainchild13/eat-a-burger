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


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  
connection.connect();
module.exports = connection;



// Exports the connection for other files to use
module.exports = sequelize;