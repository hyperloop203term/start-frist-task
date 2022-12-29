//call database
const route = requre('koa-router');
const Router = new route();
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "leothai",
    database: ""
})

con.beginTransaction(function (err) {
    if (err) { throw err; }
    
    con.query('INSERT INTO products SET product_name=?,product_price=?,product_qty=?', ['TestCar', 4000, 3], function (error, results, fields) {
        if (error) {
            return con.rollback(function () {
                throw error;
            });
        }
        console.log(results)
        con.commit(function (err) {
            if (err) {
                return con.rollback(function () {
                    throw err;
                });
            }
            console.log('Commited and Success!');
        });
    });
});
Router.get('/test', async ctx => {
    console.log('test path /test')
    ctx.body = "response from /test"
})
Router.post('/testPOST', async ctx => {
    let data = ctx.request.body
    console.log(data)
    ctx.body = data
})
module.exports = Router
