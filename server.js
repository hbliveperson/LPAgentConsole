HOST = '0.0.0.0';
PORT = process.env.C9_PORT;

// Load the http module to create an http server.
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    response.end(JSON.stringify({status: 'success'}));
}).listen(PORT, HOST);

console.log('Server running on ' + HOST + ' on port ' + PORT);