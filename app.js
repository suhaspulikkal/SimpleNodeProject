let express = require('express');
let myHero = require('superheroes');
const path = require('path');

console.log('Node Js is working! Hurray!',myHero.random())

let myApp = express();
myApp.use(express.static(path.join(__dirname, 'Public/')));

myApp.get('/', function(req,res){
/*   res.send("Hi");*/
    res.sendFile(__dirname + "/index.html");
})

myApp.get('/resume', function(req,res){
res.sendFile(__dirname + "/Resume/resume.html");
})



myApp.listen(process.env.PORT || 3000,function(){
  console.log('Server Started successfully')
}) 

