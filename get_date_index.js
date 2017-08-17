
var http = require('http');
var date = require('./get_date.js');


http.createServer(function (req, res) {

    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write(date.myDateTime());

    res.end();

}).listen(8080);