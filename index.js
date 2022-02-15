var express = require('express')
var data = express()

data.set("view engine","pug");
data.set("views","./view");


data.get("/",function(req,res){
    res.render("homepage");
})

data.get("/insert",function(req,res){
    res.render("insert");
})

data.get("/about",(req,res) =>{
    res.render("about");
})
data.listen(8081);