"use strict";
exports.removeElement = function (options) {
    if (options.nativeElement) {
        options.nativeElement.parentNode.removeChild(options.nativeElement);
        delete options.nativeElement;
    }
};
