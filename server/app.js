const express = require('express');
const app = express();
var http = require('http').Server(app);
var path = require('path');
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', function (req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('public/index.html'));
  });
