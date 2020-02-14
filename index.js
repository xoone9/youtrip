var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YOUTRIP' });
});
router.get('/search', function(req, res, next) {
  res.render('search', { title: 'YOUTRIP' });
});

router.get('/category', function(req, res, next) {
  res.render('category', { title: 'YOUTRIP' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: "YOUTRIP" });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: "YOUTRIP" });
});

module.exports = router;

