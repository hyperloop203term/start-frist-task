const route = require('koa-router');
const Router = new route();

Router.get('/test',async ctx => {    
    ctx.body =   "respose from /test"
    console.log ('test path /tset');
});

Router.post('/testPOST',async ctx => {
    let data = ctx.request.body
    console.log (data);
    ctx.body = data
});

module.exports =Router
