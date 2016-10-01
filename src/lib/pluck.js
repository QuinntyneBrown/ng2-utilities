"use strict";
exports.pluck = function (options) {
    var item = {};
    for (var i = 0; i < options.items.length; i++) {
        if (options.value == options.items[i][options.key || "id"]) {
            item = Object.assign({}, options.items[i]);
        }
    }
    return item;
};
