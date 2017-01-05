var express = require("express");
var router = express.Router();

router
	.get('/', function (req, res) {
  		res.render('index');
	})

module.exports = router;

//must be named index.js as other file names will promote issues