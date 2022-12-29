var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //console.log("Connect!");
  var sql = "select * from users";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Connection");
    //console.log(result);
  });

});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
  
// Connecting to database
con.connect(function(err) {
    if(err){
      console.log("Error in the connection")
      console.log(err)
    }
    else{
      console.log(`Database Connected`)
      console.log(`==================`)
      console.log(`                  `)
      con.query(`SHOW DATABASES`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result Database Name : ",result) 
      })
    }
})
 