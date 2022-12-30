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
    //res.send('Get All !!')
    //data package
    const responseData = {

      message:"Hello, GFG Learner",
      
      articleData:{
          articleName: "How to send JSON response from NodeJS",
          category:"NodeJS",
          status: "published"
      },      
      endingMessage:"Visit leothai for more"

    }

    //JSON format
    //convert to JSON format
    const jContent = JSON.stringify(responseData);
    //send to http
    res.send(jContent);

    //const jconContent = JSON.stringify(responseData);
    //res.send(jconContent);

    })

    //test reponse by express
    //var express = require('express');
    var app2 = express(); 
    //var PORT = 3000;
    
    app2.use(express.json());
    app2.use(express.urlencoded({ extended: true }));
    
    app2.post('/signup', function (req, res) {
    var data = req.body;
    
    console.log("Name: ", data.name);
    console.log("Age: ", data.age);
    console.log("Gender: ", data.gender);
        
    res.send();
    });
    
    //==============================

//app.listen(PORT, function(err){
//    if (err) console.log(err);
//    console.log("Server listening on PORT", PORT);
//});    

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
    console.log(`Application listening on port ${port}!`)
})