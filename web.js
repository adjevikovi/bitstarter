var express = require('express');
var app = express();
var fs = require('fs');
var output;


var readFromFile = function(fileName){
    fs.readFile(fileName, 'utf8', function(err, data){
	if(err){ 
	    console.log(err);
	    output = err;
	} else{
	    console.log(data)
	    output = data;
	}
	return output;
    }
	
    );
};

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(readFromFile("index.html"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
