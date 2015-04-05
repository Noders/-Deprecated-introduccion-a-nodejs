var http = require('http'); //Asi se requieren "librerias" o "modulos"

http.createServer(function(request, response) {
    response.writeHead(200); //codigo de estado en el header
    response.write("Hola mundo!   "); //el "body" de la respuesta
    setTimeout(function() {
        response.end(); // cerrar la conexion
        response.write("El proceso termino "); //el "body" de la respuesta
    }, 5000);
}).listen(3000); //escuchar conexiones en el puerto 3000 

console.log("Aqui, escuchando el puerto 3000...");
