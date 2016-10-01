"use strict";
exports.appendToBodyAsync = function (options) {
    return new Promise(function (resolve) {
        document.body.appendChild(options.nativeElement);
        setTimeout(function () { resolve(); }, options.wait || 100);
    });
};
