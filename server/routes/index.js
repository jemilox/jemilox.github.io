var express = require('express');
var router = express.Router();
var path = require('path');
var admin = require("firebase-admin");

var serviceAccount = require("../meow.json");

// BACKEND API

var app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lisa-s-games.firebaseio.com"
});

const db = admin.firestore();

console.log("MEOW");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('../index.html'));
});

router.get('/bubbleLeaders', async function(req, res, next) {
  console.log('RAWR ============================');  

  const scores = await db.collection('bubble').doc('leaderboard').get()
  .then(result => {
    console.log('result', result);
    return result.data()
  })
  .catch(error => {
    console.log('error', error);
    return error;
  });
  console.log('scores', scores);

  res.send(scores);
});

module.exports = router;
