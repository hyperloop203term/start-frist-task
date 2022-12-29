const express = require('express')  // module express
const app = express()  // create app variable is instance of express
const port = 3000  // port 

// return "Answer" when GET request from homepage
app.get('/', function (req, res) {
    res.send('hello world LeoThai')
    })

//call route file
//var conn = require("../routes/routes")
app.get('/getall',function (req, res) {
    res.send('Get All !!')
    })

app.get('/getid/:id',function (req, res) {
    res.send('Get by Id !!')
    })    

app.put('/postupdate/:id',function (req, res) {
    res.send('Insert by Id !!')
    })  

app.delete('/postdelete/:id',function (req, res) {
    res.send('post delete by id !!')
    })  
    
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})