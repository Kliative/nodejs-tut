var http = require('http');
var module1 = require('./module');
var module2 = require('./module2');


http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}
).listen(8000);