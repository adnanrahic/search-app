var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/', function(req, res, next) {
  res.render('youtube', { title: 'YouTube' });
}); */

/*router.get('/', function(req, res, next) {
  res.render('flickr', { title: 'Flickr' });
}); */

/*router.get('/google', function(req, res, next) {
  res.render('google', { title: 'Googleplus' });
}); */

module.exports = router;
