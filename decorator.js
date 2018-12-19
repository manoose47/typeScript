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
    ctor.prototype.showAllDetails = function () {
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
//Interstingly, typescript doesn't recognise that the showAllDetails method of the decorator 
//is now a part of the new class, so we need to cast the class with the any type
//Fred.showAllDetails()  -- will error
Fred.showAllDetails();
// Now were using a decorator, based on whether a condition is met. So we refer to the boolMcDec decorator through the Doctor boolean function 
function boolMcDec(ctor) {
    ctor.prototype.areYouDiseased = "Bad news!";
}
// needed to disable stict null checks in tsconfig to fix this. This seems hacky as fuck
function Doctor(value) {
    return value ? boolMcDec : null;
}
var AverageJoe = /** @class */ (function () {
    function AverageJoe() {
        this.name = "Joe";
        this.build = "average";
    }
    AverageJoe = __decorate([
        Doctor(true)
    ], AverageJoe);
    return AverageJoe;
}());
var joe = new AverageJoe();
console.log(joe.areYouDiseased);
//# sourceMappingURL=decorator.js.map