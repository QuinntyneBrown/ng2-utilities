"use strict";
exports.createElement = function () {
    var divElement = document.createElement("div");
    divElement.innerHTML = "<div></div>";
    return divElement.firstChild;
};
