// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router()

// configuration ===========================================

router.use(bodyParser.json())
router.use(express.static(__dirname + '/assets'));
router.use(express.static(__dirname + '/templates'));
router.use('libs', express.static(__dirname + '/libs'));
router.get('/', function(req, res) {
    res.sendfile('layouts/app.html')
});

app.use(router);

app.listen(3070, function() {
    console.log('Serwer nasluchuje na porcie numer', 3070);
});
