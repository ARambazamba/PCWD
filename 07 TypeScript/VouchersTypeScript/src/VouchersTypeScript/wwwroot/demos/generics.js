"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genericFunctions() {
    debugger;
    function concat(arg) {
        var result = "";
        for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
            var m = arg_1[_i];
            result += m.toString() + ", ";
        }
        return result;
    }
    var stringArr = ["Alex", "Giro", "Soi the Whippet"];
    console.log(concat(stringArr));
    var nbrArr = [100, 201, 322];
    console.log(concat(nbrArr));
}
function genericClassesInterfaces() {
    var voucherInventory;
    var Catalog = (function () {
        function Catalog() {
            this.items = new Array();
        }
        Catalog.prototype.addItem = function (newItem) {
            this.items.push(newItem);
        };
        Catalog.prototype.getNewestItem = function () {
            return this.items[this.items.length - 1];
        };
        Catalog.prototype.getAllItems = function () {
            return this.items;
        };
        return Catalog;
    }());
    ;
    var cat = new Catalog();
    var v = { ID: 1, Text: "Media Markt", Amount: 22, Date: new Date(), Paid: false, Expense: true };
    cat.addItem(v);
}
;
function genericConstraints() {
    var Catalog = (function () {
        function Catalog() {
            this.items = new Array();
        }
        Catalog.prototype.getAllItems = function () {
            return this.items;
        };
        return Catalog;
    }());
}
//# sourceMappingURL=generics.js.map