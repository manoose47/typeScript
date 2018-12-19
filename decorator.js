"use strict";
//A decorator is a normal function, right up until the @ sign is used to invoke it
//decorators act as functions that take a single argument: a class constructor:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function bantAndDec(ctor) {
    console.log(ctor);
}
//upon execution, the bantAndDec decorator will show us this classes constructor
var Bro = /** @class */ (function () {
    function Bro(name) {
        this.name = "Andy";
        this.name = name;
    }
    Bro.prototype.call = function () {
        console.log("Hey " + this.name);
    };
    Bro = __decorate([
        bantAndDec
    ], Bro);
    return Bro;
}());
var Jimmy = new Bro("jimmy");
Jimmy.call();
// Decorators can be used to hijack classes and add properties & fields to the class
function noChoiceMcDec(ctor) {
    ctor.prototype.add = function showAllDetails() {
        console.log(this);
    };
}
var privatePerson = /** @class */ (function () {
    function privatePerson() {
        this.name = "Fred";
        this.fear = "snakes";
        this.age = 39;
    }
    privatePerson = __decorate([
        noChoiceMcDec
    ], privatePerson);
    return privatePerson;
}());
var Fred = new privatePerson();
//# sourceMappingURL=decorator.js.map