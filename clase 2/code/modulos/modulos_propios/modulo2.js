var funcion1 = function(){
	console.log("yo soy una funcion exportada :o ");
}
var funcion2 = function(){
	console.log("yo soy la otra funcion exportada ;) ");
}
var funcion3 = function(){
	console.log("yo soy la Ultima funcion, pero me llaman desde el require! ");
	console.log("y voy a contar hasta 10 ");
	de1a10()
}

var de1a10 = function(){
	for (var i = 1; i <= 10; i++) {
		console.log(i)
	};
}

module.exports.unaFuncion = funcion1;
module.exports.otraFuncion = funcion2;
module.exports.laTerceraFuncion = funcion3;

