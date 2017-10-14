var express = require("express");
var app = express();
var request = require("request");
app.set('view engine','ejs');

app.get('/',function(req,res,params){
	res.render("index");
})

currentPosition = {
	lat: 28.751072,
	lng: 77.116743
}
data = [{
	lat: 28.720641,
	lng: 77.107509
},{
	lat: 28.748742,
	lng: 77.137672
}];


var closest = 100000, index;
var length = data.length;
for(var i=0; i < length; i++){
	var url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="+currentPosition.lat+","+currentPosition.lng+"&destinations="+data.lat+","+data.lng+"&key=AIzaSyCs2_VTWLD5Uu-Kw5irse8_jq2QRliDvw0";
	request(url, function(error, response, body){
	  if(!error && response.statusCode == 200){
	    var distances = JSON.parse(body);
	   	data[i].distance = distances.rows[0].elements[0].distance.value;
	   	if(data[i].distance < closest){
	   		index = i;
	   	}
	  }
	});
}

app.get('/result',function(req,res,params){
	res.render("result",{result:data[i]});
})



app.listen(5050, function(){
	console.log("HEllo")
})
