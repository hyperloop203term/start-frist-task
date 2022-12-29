// --- This code for frist test --

//const Koa = require('koa');
//const app = new Koa();

//app.use(async ctx => {
//ctx.body = 'Hello';
//});
//app.listen(3000);


const Koa = require('koa');
const app = new Koa();

app.use(BodyParser()) // recieved Body Method Post
const BodyParser = require('koa-bodyparser'); //call bodyparser for recieved body from method POST
const cors = require('@koa/cors'); //cors used for access role
const router = require('./routes/routes')  //call file into router valiable

app.use(
    cors({ //role define for Cross-Origin Resource Sharing(CORS)
        origin: '*',
        allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
        exposeHeaders: ['X-Request-Id'],
    }),
)

app.use(router.routes()) // call app tigger router

console.log("App Start Port 3000")
app.listen(3000);