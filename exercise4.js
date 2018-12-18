"use strict";
// generic class - Type t can be a number or string only
var MyMap = /** @class */ (function () {
    function MyMap() {
        // map acts as a dictionary for storing key value pairs
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        console.log(this.map[key]);
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key);
        }
        console.log(this);
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('Apples', 5);
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
//# sourceMappingURL=exercise4.js.map