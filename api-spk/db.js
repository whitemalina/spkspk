const mysql = require("mysql");

var mysqlcon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

module.exports = mysqlcon;
