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
  var sql = "INSERT INTO `users`(`name`, `address`) VALUES ('leo','Chonburi')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("--Insert Data to Table");
    console.log(result);
  });

});