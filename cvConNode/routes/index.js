var express = require('express');
var router = express.Router();
//let usuarioModelo = require("../models/usuariosModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});







module.exports = router;