var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hola mundo!   ");
    setTimeout(function() {
        response.end();
        console.log("El proceso termino ");
    }, 5000);
}).listen(3000);
console.log("Aqui, escuchando el puerto 3000...");
