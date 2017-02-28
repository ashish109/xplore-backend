var express = require('express');
var router = express.Router();
var addUser = require('../lib/addUser.js');


router.post('/', function(req, res, next) {
    addUser(req.body,res);
});

module.exports = router;
