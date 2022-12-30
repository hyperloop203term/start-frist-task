<pre>
# start-frist-task

#Nodejs-mysql-api-example
#1. Create Config file and Update
    - git init
    - git config user.name "hyperloopterm2023"
    - git config user.email "hyperloop.2023term@gmail.com"
    - git Add . (All upload)
    - git commit -m "result each time"
    - git push origin

#2. npm init
#3. npm install 
#4. install "body-parser"  -- > npm install body-parser
            "express"      -- > npm install express dotenv
            "mysql"        -- > npm install mysql --save
             
  #Create Database and Table   
   - Download XAMP and Setup
   - Create Database and Security login
   
        const Koa =require('koa')
        const app =new Koa();

        app.use(async ctx => {
            ctx.body = "Hello !! Welcome to Backend Leo Page ";
        });

        app.listen(3000);

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
        var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
        });
 </pre>
  
  
  ![create-with-nodejs](https://user-images.githubusercontent.com/121533968/209927515-1d4824e9-b0df-4adf-880b-87805bb46e64.jpg)
  

<pre>
 var mysql = require('../start-frist-task/node_modules/mysql');

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
      con.query(`SHOW DATABASES`, 
      function (err, result) {
        if(err)
          console.log(`Error executing the query - ${err}`)
        else
          console.log("Result: ",result) 
      })
    }
})
 </pre>

  ![node-connect-to-mysql-query-database](https://user-images.githubusercontent.com/121533968/209930277-6f30e820-3657-44c1-b0bd-4b322bc029d8.jpg)   

 <pre>

  #Install Back-End framwork for Node.js
   - Koa   --> npm install koa
           --> npm install @koa/cors
           --> npm install koa-router
           --> npm install koa-bodyparser
   - test run result with node index.js with port : 3000
</pre>
   
   ![test-backend-browser1](https://user-images.githubusercontent.com/121533968/209915683-3d3a3de3-8edc-4aca-9caa-aed3774d10b5.jpg)
   ![test-backend-code1](https://user-images.githubusercontent.com/121533968/209915692-4f495f8d-9f8c-4282-81bf-8abadc9b7520.jpg)
   ![test-backend-terminal1](https://user-images.githubusercontent.com/121533968/209915698-cf85174f-cef1-4fe9-a065-e9036eb7c12b.jpg)

<pre>
  #Create Routes.js file
   - Security login 
   - Route file for query data with CRUD
     >@Get

  =========================
        const express = require('express')  // module express
        const app = express()  // create app variable is instance of express
        const port = 3333 // port 

        var mysql = require('mysql');

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

==================================

</pre>

   ![test-route-by-postman](https://user-images.githubusercontent.com/121533968/209923960-91581d59-1020-4bad-8e15-14488aab8862.jpg)

<pre>
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
</pre>

![prepare-json-file-format](https://user-images.githubusercontent.com/121533968/210028020-838d12c1-8303-4a13-8610-78db9bc38d16.jpg)



<pre>
REST API with Node.js, Express, and MySQL for Web Browser
Config file create
1. Install Node Module --> npm install mysql2 for use middleware
2. Prepare environment file
   2.1 Create services file for 
   2.2 control database schema, 
   2.3 middleware , and
   2.4 database security
</pre>

![get-JSON-file-toBrowser](https://user-images.githubusercontent.com/121533968/210051507-c6c6fb9e-243e-4b88-9feb-7c54bdb39cc2.jpg)

<pre>
2.1  Service file
const db = require('./db');
const helper = require('../middleware/helper');
const config = require('../config/config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT id, name, address
     FROM users LIMIT ${offset},${config.listPerPage}`
  );
  
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}

2.2 control database schema,  
//for recheck shemma and define format between client and database
const mysql = require('mysql2/promise');
const config = require('../config/config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}

2.3 Data Offset for return to JSON format
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }
  
  module.exports = {
    getOffset,
    emptyOrRows
  }
  
  2.4 Connect Database
  const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost",
      user: "root",
      password: "",
      database: "mydb",
    },
    listPerPage: 10,
  };
  module.exports = config;
  
</pre>

Check Result from Browser and Posman with  : http://localhost:3333/listusers

![check-data-from-postman](https://user-images.githubusercontent.com/121533968/210052812-a8f526fd-ff61-4690-90fd-55ee47e4c671.jpg)

<pre>
=== package.json ===
{
  "name": "nodejs-express-mysql-api",
  "version": "1.0.7",
  "description": "Node.js Restful CRUD API with Node.js, Express and MySQL",
  "main": "(index.js) server.js",
  "scripts": {
    "test": "echo \"Error: no test spec\" && exit 1",
    "start": "index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hyperloop203term/start-frist-task.git"
  },
  "keywords": [
    "nodejs"
  ],
  "author": "Pannavich Ariyatanakatawong",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/hyperloop203term/start-frist-task/issues"
  },
  "homepage": "https://github.com/hyperloop203term/start-frist-task#readme",
  "dependencies": {
    "@koa/cors": "^4.0.0",
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "koa": "^2.14.1",
    "koa-bodyparser": "^4.3.0",
    "koa-router": "^12.0.0",
    "mysql": "^2.18.1",
    "mysql2": "^2.3.3",
    "nodemon": "^2.0.20"
  }
}
========================= finished ===================================

</pre>
