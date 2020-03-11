var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "TV console",
    list: [
      "Nintendo Switch",
      "Sony PS4",
      "Microsoft Xbox"
    ]
  });
});

module.exports = router;
