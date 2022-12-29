const { json } = require('body-parser');

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

app.get('/user/:userId',(req,res) =>{
    res.send('query data by id')
});

app.get ('/user',(req,res)=>{
    res.send('query all')
});

app.post('/user/',(req,res)=>{
    res.send('create user'+ JSON.stringify(req.body));
});

app.put('/user/:userId',(req,res)=>{
    res.send('edit data',+ req.params.userID + ':' +
    JSON.stringify(req.body))
});

app.delete('/user/:userID',(req,res)=>{
   res.send('User delete' + req.params.userID + ':' +
   JSON.stringify(req.body))
});

module.exports =Router
