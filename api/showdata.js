var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connect and Query data from Table!");
  var sql = "select * from users";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Query Data from Table");
    console.log(result);
  });

});