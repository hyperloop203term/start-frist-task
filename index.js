//run backend
var conn = require("./connection/connect")

//---
const Koa =require('koa')
const app =new Koa();

app.use(async ctx => {
    //ctx.body = "Hello !! Welcome to Backend Leo Page \n";
    //show on web page
    ctx.body = "Happy New Year!! ";
    //display on black screen
    console.log("Backend run on port: 3000 ");
});

app.listen(3000);

