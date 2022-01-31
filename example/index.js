// express server on port 3000
var express = require('express');
var app = express();
var server = app.listen(3000);

// listen on public directory
app.use(express.static(__dirname + '/public'));