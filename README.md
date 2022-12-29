<pre>
# start-frist-task

#Nodejs-mysql-api-example
#1. Create Config file and Update
#2. npm init
#3. npm install 
#4. install "body-parser"  -- > npm install body-parser
            "express"      -- > npm install express dotenv
            "mysql"        -- > npm install mysql

            const mysql = require('mysql')
            const connection = mysql.createConnection({
            host: 'localhost',
            user: 'dbuser',
            password: 'leothai',
            database: 'leothaidb'
            })

            connection.connect()

            connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
            if (err) throw err

            console.log('The solution is: ', rows[0].solution)
            })

            connection.end()
     
</pre>
