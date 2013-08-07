var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use('/images/', express.static(__dirname +'/images/'));
app.use('/css/', express.static(__dirname +'/css/'));

app.get('/', function(request, response) {
    var fileContent = fs.readFileSync("index.html"); //remove sync later
    response.send(fileContent.toString());
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
