var express = require("express");
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');


//yyt
var mongoose = require('mongoose');
var app = express();

var articleInsightRouter = require('./app/routes/article_insight.server.routes');

//yyt
var logInPageRouter = require('./app/routes/article_insight.loginPage.routes');

app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//the session will expire in 300mins
//ref: https://github.com/expressjs/session
app.use(session({
 secret: 'ssshhhhh',
 cookie: {maxAge: 18000000},
 resave: true,
 saveUninitialized: true
}));

app.use('/', articleInsightRouter);

//yyt
app.use('/', logInPageRouter);

// 20190617 set listening port to 3000, using DNS sub-domain routing in AWS Route 53
app.listen(3000, function () {
    console.log("listening on port 3000!");
})