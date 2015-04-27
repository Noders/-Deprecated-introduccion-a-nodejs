var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Perro = mongoose.model('Perro', {
    nombre: String
});



/* GET lista de Perros. */
router.get('/', function(req, res, next) {
    Perro.find(function(err, perros) {
        if (err) {
            console.log(err);
        } else {
            console.log(perros);
            res.render('perros/lista',

                {
                    title: 'Mis Perros',
                    perros: perros
                }



            );
        }
    });
});




/* Formulario para Crear Perros. */
router.get('/crear', function(req, res, next) {
    res.render('perros/crear', {
        title: 'Creando un Perro'
    });
});

/* POST para Crear Perros. */
router.post('/crear', function(req, res, next) {

    console.log(req.body)
    console.log(req.params)
    var unPerro = Perro({
        nombre: req.body.nombre
    });


    unPerro.save(function(err, elPerro) {
        if (err) {
            console.log(err);
            res.send("Hay un error")
        } else {
            res.redirect("/perros");
        }
    });




});




/* GET un perro. */
router.get('/:id', function(req, res, next) {


    Perro.findById(req.params.id, function(err, perro) {
        if (err) {
            console.log(err);
        } else {
            console.log(perro);
            res.render('perros/unosolo', {
                title: 'Mi Perro',
                perro: perro
            });
        }
    });


});






/* DELETE un perro. */
router.get('/:id/borrar', function(req, res, next) {
    Perro.findOneAndRemove(

        {
            _id: req.params.id
        },
        function(err, perro) {
            if (err) {
                console.log(err);
            } else {
                console.log(perro);
                res.redirect("/perros")
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
