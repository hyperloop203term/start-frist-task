var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connection");
  
  //var sql = "INSERT INTO `users`(`name`, `address`) VALUES ('neo','bangkok')";
  //con.query(sql, function (err, result) {
  //  if (err) throw err;
  //  console.log("--Insert Data to Table");
  //  console.log(result);
  //});

});