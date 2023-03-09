var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//necesito el "fileUpload" o me va a aparecer el error "ER_NO_DEFAULT_FOR_FIELD: Field 'nombre' doesn't have a default value"
var fileUpload = require("express-fileupload")
var cors = require("cors")

require("dotenv").config();
let pool = require("./models/bd")


let session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminRouter = require("./routes/admin/admin")
let loginRouter = require("./routes/login")
let apiRouter = require("./routes/api")


var app = express();

let bodyParser = require("body-parser")
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret:"asdwadgtvbvcjkebytsk",
  cookie:{ maxAge: null },
  resave: false,
  saveUninitialized: true
}));




secured = async (req, res, next) => {  
  try {
     console.log(req.session.id_usuario);
    if (req.session.id_usuario != undefined) {
      next();
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.log(error)
  }
}
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:"/tmp/"
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login",loginRouter)
app.use("/admin/admin",secured, adminRouter)
app.use("/api", cors(),apiRouter)

/*prueba para la base de datos
pool.query("select * from usuario").then(function (resultados){
  console.log(resultados)
})*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//este codigo hace que se puedan leer los errores 500
app.use(function(error,req, res, next){
  console.error(error);
  res.send('500: internal Server Error',500)
})

module.exports = app;
