var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('isomorphic');

//For requiring `.jsx` files as Node modules
require('node-jsx').install({
    extension: '.jsx'
});
var AppRoutes = require('./react/AppRoutes.jsx');
var React = require('react');
// May we should use react Async to render html in server side.
var reactAsync = require('react-async')
var ReactRouter = require('react-router');
var ExpressLocation = require('react-router-express');

var DOM = React.DOM,
    body = DOM.body,
    div = DOM.div,
    script = DOM.script;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// capture /noteapp don't go into server rendering...
app.get('/noteapp',function(req, res) {
    res.render("index");
});
// Render React on Server
app.use(function(req, res) {
    var location = new ExpressLocation(req.url, res);
    debug(req);
    ReactRouter.run(AppRoutes, location, function(Root, state) {
        res.setHeader('Content-Type', 'text/html');
        var AppFactory = React.createFactory(Root);
        var markup = React.renderToString(AppFactory());
        res.send('<!DOCTYPE html>' + markup);
    });
});


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
        console.log(err);
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
