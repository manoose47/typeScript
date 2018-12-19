var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + ' goes Toooooooooot!');
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
//Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    baseObject.prototype.calcSize = function () { return 0; };
    ;
    return baseObject;
}());
;
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 5;
        _this.length = 3;
        return _this;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    ;
    return rectangle;
}(baseObject));
console.log(new rectangle().calcSize());
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Persono = /** @class */ (function () {
    function Persono() {
        this._firstName = "";
    }
    Object.defineProperty(Persono.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Persono;
}());
;
var person = new Persono();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
//# sourceMappingURL=exercise3.js.map