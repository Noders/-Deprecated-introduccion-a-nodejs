var http = require('http'); //importacion de modulos de npm

http.createServer(function(request, response) {
    response.writeHead(200); // all good :)
    response.write("Hola noders!   ");
    response.end();
}).listen(3007);

console.log("Aqui, escuchando el puerto 3007...");

