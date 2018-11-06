"use strict";
exports.__esModule = true;
var SessionStorage = /** @class */ (function () {
    function SessionStorage() {
    }
    Object.defineProperty(SessionStorage.prototype, "storage", {
        set: function (session) {
            this._session = session;
        },
        enumerable: true,
        configurable: true
    });
    SessionStorage.prototype.clear = function () {
        this._session.destroy();
    };
    SessionStorage.prototype.getItem = function (key) {
        return this._session[key];
    };
    SessionStorage.prototype.removeItem = function (key) {
        delete this._session[key];
    };
    SessionStorage.prototype.setItem = function (key, value) {
        this._session[key] = value;
    };
    return SessionStorage;
}());
exports.SessionStorage = SessionStorage;
