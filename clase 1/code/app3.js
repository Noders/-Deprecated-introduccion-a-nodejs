var http = require('http'); //Asi se requieren "librerias" o "modulos"

http.createServer(function(request, response) {
    response.writeHead(200); //codigo de estado en el header
    response.write("Mandamos a procesar "); //el "body" de la respuesta
    setTimeout(function() {
        console.log("procesamos un archivo pesado"); //el "body" de la respuesta
        console.log("vamos a mandar una notificacion"); //el "body" de la respuesta
    }, 10000);
    response.end(); // cerrar la conexion
}).listen(3000); //escuchar conexiones en el puerto 3000 

console.log("Aqui, escuchando el puerto 3000...");
