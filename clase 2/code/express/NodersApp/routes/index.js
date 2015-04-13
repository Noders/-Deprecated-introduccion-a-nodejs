var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/pcmasterrace', function(req, res, next) {
    unirest.get("https://byroredux-metacritic.p.mashape.com/game-list/pc/coming-soon")
        .header("X-Mashape-Key", "mgJXDeuxhUmshog39jEw2pJSRkQDp1vNOBWjsnzDkSjYxIxnvl")
        .header("Accept", "application/json")
        .end(function(result) {
        	console.log(result.body.results)
            res.render('game', {
		        title: 'Express',
		        juegos:result.body.results
		    });
        });

});

module.exports = router;
