"use strict";
exports.__esModule = true;
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.clear = function () {
        localStorage.clear();
    };
    LocalStorage.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorage.prototype.removeItem = function (key) {
        return localStorage.removeItem(key);
    };
    LocalStorage.prototype.setItem = function (key, value) {
        return localStorage.setItem(key, value);
    };
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
