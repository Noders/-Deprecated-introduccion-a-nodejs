var http = require('http');
var _ = require('lodash');
var array = [1, 2, 3, 4, "perro"];
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hola noders!   ");
    _.each(array, function(val, i) {
        console.log(val + " texto extra");
    });
    response.end();

}).listen(3001);

console.log("Aqui, escuchando el puerto 3001 ");
