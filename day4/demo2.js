"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, f, l) {
        this.const = 3.14;
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n            ID    :: ".concat(this.id, "\n            FName :: ").concat(this.fname, "\n            LName :: ").concat(this.lname, " \n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
