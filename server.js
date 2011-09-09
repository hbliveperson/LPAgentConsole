HOST = '0.0.0.0';
PORT = process.env.C9_PORT;

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var qs = require('querystring');
var util = require('util');

http.createServer(function(request, response) {
    var data = '';
    
    request.addListener('data',function(chunk) {
        console.log('data:' + chunk);
        data += chunk;
    });
    request.addListener('end',function() {
        console.log('end: ' + data);
        console.log(JSON.parse(data));
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        response.write(data);
        response.end('\n');
    });
}).listen(PORT, HOST);

console.log('Server running on ' + HOST + ' on port ' + PORT);