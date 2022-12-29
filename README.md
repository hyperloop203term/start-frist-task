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
   
            const mysql = require('mysql')
            const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'leothai',
            database: 'leothaidb'
            })

            connection.connect()

            connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
            if (err) throw err

            console.log('The solution is: ', rows[0].solution)
            })

            connection.end()
 

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
     >@Crate
     >@Read
     >@Update
     >@Delete 
   
</pre>

    ![test-route-by-postman](https://user-images.githubusercontent.com/121533968/209921860-7f4c7af5-a8ac-44de-8b2a-79fc66a845c6.jpg)

