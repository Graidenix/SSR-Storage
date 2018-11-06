"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=local-storage.js.map