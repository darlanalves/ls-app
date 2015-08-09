'use strict';

var express = require('express');
var PORT = process.env.PORT || 80;

var app = express().use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT);
console.log('>>> Listening on ' + PORT);
