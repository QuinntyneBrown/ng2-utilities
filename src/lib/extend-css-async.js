"use strict";
exports.extendCssAsync = function (options) {
    return new Promise(function (resolve) {
        Object.assign(options.nativeElement.style, options.cssObject);
        resolve();
    });
};
