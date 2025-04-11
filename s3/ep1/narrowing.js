"use strict";
function traiterValeur(param) {
    if (typeof param === "string") {
        return param.length;
    }
    else {
        return param * 2;
    }
}
