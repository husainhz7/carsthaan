var express = require("express");
var app = express();
app.set('view engine','ejs');

app.get('/',function(req,res,params){
	res.render("index");
})

app.listen(5050, function(){
	console.log("HEllo")
})
