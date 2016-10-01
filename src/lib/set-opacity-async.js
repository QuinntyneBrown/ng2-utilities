"use strict";
exports.setOpacityAsync = function (options) {
    return new Promise(function (resolve) {
        if (options.nativeElement) {
            options.nativeElement.style.opacity = options.opacity;
            options.nativeElement.addEventListener('transitionend', removeListenerAndResolve, false);
        }
        function removeListenerAndResolve() {
            options.nativeElement.removeEventListener('transitionend', removeListenerAndResolve);
            resolve();
        }
    });
};
