var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hola chicos!   ");
    response.end();
}).listen(3000);

console.log("Aqui, escuchando el puerto 3000...");

