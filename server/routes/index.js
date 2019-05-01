var express = require('express');
var router = express.Router();
var path = require('path');

console.log("MEOW");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('../index.html'));
});

router.get('/bubbleLeaders', function(req, res, next) {
  console.log('RAWR ============================');  
  res.send([{name: 'meow', score: '10'}]);
});

module.exports = router;
