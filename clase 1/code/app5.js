var http = require('http');
var _ = require("lodash")
var perro = [1, 2, 3, 4, "perro","gato"];

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hola chicos como les va!   ");
    _.each(perro, function(val, i) {
        console.log(val + " " + i);
    });
    response.end();
}).listen(3000);

console.log("Aqui, escuchando el puerto 3000...");
