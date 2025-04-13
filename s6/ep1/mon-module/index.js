"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alerter = alerter;
exports.logger = logger;
function alerter(message) {
    console.log("Alerte:", message);
}
function logger(message) {
    console.log("Log:", message);
}
