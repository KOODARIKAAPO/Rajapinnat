var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exampleRouter = require('./routes/example');
var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware-funktio, joka suoritetaan jokaiselle pyynnölle
app.use(
    function (req, res, next) {
        console.log('The common middleware called');
        next();
    }
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', exampleRouter);
app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);

module.exports = app;
