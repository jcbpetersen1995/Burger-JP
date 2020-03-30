var orm = require("../config/orm");

var table = "burgers";

module.exports = {
    all: function (cb) {
        orm.all(table, function (result) {
            cb(result);
        })
    },
    create: function (cols, vals, cb) {
        orm.create(table, cols, vals, function (result) {
            cb(result);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update(table, objColVals, condition, function (result) {
            cb(result);
        });
    }
}
