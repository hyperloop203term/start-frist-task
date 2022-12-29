var mysql = require('../start-frist-task/node_modules/mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id int primary key auto_increment, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

//run backend

const Koa =require('koa')
const app =new Koa();

app.use(async ctx => {
    ctx.body = "Hello !! Welcome to Backend Leo Page ";
});

app.listen(3000);