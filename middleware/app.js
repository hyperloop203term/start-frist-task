// Check dependencies
var http = require('http');
// Create the http server.
// reference: http://net.tutsplus.com/tutorials/javascript-ajax/node-js-for-beginners/

/***************
* Correction 1: Using the request.on('close', function()( ... )-listener isn't required anymore
***************/
http.createServer(function(req, res) {
    console.log('Receving request...');
    var callback = function(err, result) {
        res.writeHead(200, {
            'Content-Type' : 'x-application/json'
        });
        console.log('json:', result);
        res.end(result);
    };

    getSQL(callback);

}).listen(3333);

// Access MySQL via node-mysql
function getSQL(callback) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'mydb',
        socketPath : '/var/run/mysqld/mysqld.sock', // socket for communication from debian <-> client, seems not to be set correcly by default?
    });

    connection.connect();
    var json = '';
    var query = 'SELECT * FROM users';
    connection.query(query, function(err, result, fields) {
        if (err)
            return callback(err, null);

        console.log('The query-result is: ', result[0]);

        // wrap result-set as json
        json = JSON.stringify(result);

        /***************
        * Correction 2: Nest the callback correctly!
        ***************/
       
        connection.end();
        console.log('JSON-result:', json);
        callback(null, json);
    });
};