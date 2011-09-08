HOST = '0.0.0.0';
PORT = process.env.C9_PORT;

// Load the http module to create an http server.
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(process.env.C9_PORT, '0.0.0.0');

console.log('Server running.');