var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Perro = mongoose.model('Perro', {
    nombre: String
});

mongoose.connect('mongodb://localhost/nodersapp_if');


/* GET lista de Perros. */
router.get('/', function(req, res, next) {
    Perro.find(function(err, perros) {
        if (err) {
            console.log(err);
        } else {
            console.log(perros);
            res.render('perros/lista', {
                title: 'Mis Perros',
                perros: perros
            });
        }
    });
});

router.get('/crearperroalamala', function(req, res, next) {
    var unPerro = Perro({
        nombre: "cachupin: " + Date.now()
    });
    unPerro.save(function(err, elPerro) {
        if (err)
            console.log(err);
        else
            console.log(elPerro);
        res.send('Perro Creado :)');
    });
});

module.exports = router;
