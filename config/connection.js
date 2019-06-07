var mysql = require("mysql");

// var connection;
// if (process.env.JAWSDB_URL){
// connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
  var connection = mysql.createConnection({
  // host: "localhost",
  // port: 3306,
  // user: "root",
  // password: "",
  // database: "tacos_db"

  host: "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "bpygpk98eqqo0nvh",
  password: "u39mme9m88ksfyw2",
  database: "ue0w6rf8ccvqp8df"
});
// };
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
