const express =require('../start-frist-task/node_modules/express');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended:true}));

//get all
app.get('/user/:userId',(req,res)=>{
    res.send('show user data by id' );
});

//create user
app.get('/user',(req,res)=>{
    res.send('Create user data bu id ' + JSON.stringify(req.body));
});

//edit user
app.put('/user/:userId',(req,res)=>{
    res.send('edit user data by id ' + req.params.userId + ':' +JSON.stringify(req.body));
});

//delete
app.delete('/user/:userId',(req,res)=>{
    res.send('delete user data by id ');
});
