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
     >@Post
</pre>

   ![test-route-by-postman](https://user-images.githubusercontent.com/121533968/209923960-91581d59-1020-4bad-8e15-14488aab8862.jpg)

