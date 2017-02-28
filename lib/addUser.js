var lodash = require("../node_modules/lodash");
var pool = require("../lib/pool.js");



function addUser(param, res) {
    var param = param;

    function getInfo(param, callback) {
        var sqlQuery = "INSERT INTO users VALUES(null," + param.mob + ",1,'" + param.deviceId + "','','')";
        console.log('sqlQuery',sqlQuery);
        pool.query(sqlQuery, function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    getInfo(param, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
}

module.exports = addUser;
