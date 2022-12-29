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

  #Create Database and Table   
   - Download XAMP and Setup
   - Create Database and Security login
            

  #Install Back-End framwork for Node.js
   - Koa   --> npm install koa
           --> npm install @koa/cors
           --> npm install koa-router
           --> npm install koa-bodyparser
   - test run result with node index.js with port : 3000
</pre>
   
   picture:![back-end-test](https://user-images.githubusercontent.com/121533968/209915328-ddaf8d68-2b69-469a-8be2-8f71f91d193d.jpg)

<pre>
  #Create Routes.js file
   - Security login 
   - Route file for query data with CRUD
     >@Crate
     >@Read
     >@Update
     >@Delete 
    

  
</pre>
