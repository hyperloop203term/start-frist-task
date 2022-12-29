var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "Select * from users";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database Connecting ");
  });
});
