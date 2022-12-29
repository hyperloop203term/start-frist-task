const Koa =require('koa')
const app =new Koa();

app.use(async ctx => {
    ctx.body = "Hello !! Welcome to Backend Leo Page ";
});

app.listen(3000);