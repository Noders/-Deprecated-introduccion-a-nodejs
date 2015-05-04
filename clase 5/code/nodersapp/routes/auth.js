var passport = require('passport');

var Cuenta = require('../models/cuenta');

var express = require('express');
var router = express.Router();

/* GET home page. */


router.route('/registrar')
    .get(function(req, res, next) {
        res.render('user/registrar', {
            title: 'Registrando un usuario'
        });
    })
    .post(function(req, res, next) {

        var UnaNuevaCUenta = new Cuenta({
            username: req.body.username
        });

        Cuenta.register(UnaNuevaCUenta, req.body.password,
            function(err, account) {
                if (err) {
                    return res.render('user/registrar', {
                        error: "no pudimos registrarte"
                    });
                }
                passport.authenticate('local')(req, res, function() {
                    req.session.user = req.user;
                    res.redirect('/');
                });
            });
    });


router.route('/login')
    .get(function(req, res) {
        res.render('user/login', {
            user: req.user
        });
    })
    .post(passport.authenticate('local'),
        function(req, res) {
            req.session.user = req.user;

            res.redirect('/');
        });


router.route('/logout')
    .get(function(req, res) {
        req.logout();
        res.redirect('/');
    });


module.exports = router;
