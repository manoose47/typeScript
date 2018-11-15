"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonDetails = /** @class */ (function () {
    function PersonDetails(name, username) {
        this.username = username;
        this.name = name;
        this.type = "";
        this.age = 0;
    }
    PersonDetails.prototype.printAge = function () {
        console.log(this.age);
    };
    PersonDetails.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return PersonDetails;
}());
var personDetails = new PersonDetails("Jimmy", "jmaster900");
console.log(personDetails.name, personDetails.username);
// Extending works similiar-ish to inheritence in c#, by default the derived class will have all the properties of the base class
// Super refers to the constructor of the base class, to overwrite it's values, we need to pass our values in to it.
// This seems a bit gammy
var Manus = /** @class */ (function (_super) {
    __extends(Manus, _super);
    function Manus(userName, name) {
        return _super.call(this, name, userName) || this;
    }
    return Manus;
}(PersonDetails));
console.log(Manus);
console.log(new Manus("Manus", "manoose47"));
//# sourceMappingURL=tsClasses.js.map