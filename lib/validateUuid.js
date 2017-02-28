var lodash = require("../node_modules/lodash");
var pool = require("../lib/pool.js");



function validateUuid(param, res) {
    var uuid = param.uuid;

    function getInfo(deviceId, callback) {
        var sqlQuery = 'SELECT * from users WHERE device_id=' + deviceId;
        pool.query(sqlQuery, function(err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    getInfo(uuid, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
}

module.exports = validateUuid;
