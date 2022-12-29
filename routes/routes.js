const express = require('express')  // module express
const app = express()  // create app variable is instance of express
const port = 3333 // port 
const Router = express.Router();

var mysql = require('mysql');
const router = require('../Controller/UserController');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connect for Get Data!');
    
    var name = 'leo'; 
    var sql = 'SELECT * FROM users WHERE name = ?';

    con.query(sql, [name],function(err, result){ 
    if (err) throw err    
       console.log(result);
    });
  });


// return "Answer" when GET request from homepage
app.get('/', function (req, res) {
    res.send('hello world LeoThai')
    })

//call route file

app.get('/getid/:id',function (req, res) {
    res.send('Get by Id !!')
    })    

app.put('/postupdate/:id',function (req, res) {
    res.send('Insert by Id !!')
    })  

app.delete('/postdelete/:id',function (req, res) {
    res.send('post delete by id !!')
    })  

app.use((req, res, next) => {
        next(createError(404));
      });   
      
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});      

app.listen(port, function() {
        console.log(`Example app listening on port ${port}!`)
    })    

