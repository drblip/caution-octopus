var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
		title: 'Express',
		body: 'Express with docker'
			});
});

module.exports = router;
