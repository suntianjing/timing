
var http = require('http');

http.createServer((request,response) =>{
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('我是你爹');

}).listen(8888);

console.log('server is running');
