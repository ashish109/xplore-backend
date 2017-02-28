var express = require('express');
var router = express.Router();
var validateUuid = require('../lib/validateUuid');


router.post('/', function(req, res, next) {
    validateUuid(req.body,res);
});

module.exports = router;
