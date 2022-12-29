var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Insert Data 1 to Table!");
  var sql = "INSERT INTO `users`(`name`, `address`) VALUES ('leo','Chonburi')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("--Insert Data to Table");
    console.log(result);
  });

});


con.connect(function(err) {
  if (err) throw err;
  console.log("Insert Data 2 to Table!");
  var sql = "INSERT INTO `users`(`name`, `address`) VALUES ('neo','bangkok')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("--Insert Data to Table");
    console.log(result);
  });

});


con.connect(function(err) {
  if (err) throw err;
  console.log("Insert Data 3 to Table!");
  var sql = "INSERT INTO `users`(`name`, `address`) VALUES ('winwin','chantaburi')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("--Insert Data to Table");
    console.log(result);
  });

});