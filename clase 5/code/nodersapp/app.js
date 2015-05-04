var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose'); //agregamos mongoose aca
mongoose.connect('mongodb://localhost/nodersapp_if'); //conectamos mongoose

var passport = require('passport'); //agregamos passport
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var perros = require('./routes/perros');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: "mi password secreto",
    resave: true, //updatea la sesion en cada cambio de route
    saveUninitialized: false // ahorra espacio en la bdd, no guarda sesiones vacias
}));
app.use(function(req,res,next){
    res.locals.session = req.session;
    if(req.session.user && req.session.user._id){
        res.locals.user = req.user;
        res.locals.loggedin = true;
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

//Autenticacion con passport
app.use(passport.initialize())
app.use(passport.session())

var Cuenta = require('./models/cuenta')
passport.use(Cuenta.createStrategy());

passport.serializeUser(Cuenta.serializeUser());
passport.deserializeUser(Cuenta.deserializeUser());

app.use('/', routes);
app.use('/users', users);
app.use('/auth', auth);
app.use('/perros', perros);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
