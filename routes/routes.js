#call database
const route = requre('koa-router');
const Router = new route();
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

//con.beginTransaction(function(err){
//    if (err) {throw err;}
//
//    con.query('INSERT INTO users SET '
//)}
//)
