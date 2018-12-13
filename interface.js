"use strict";
var NoTouchy;
(function (NoTouchy) {
    // anything that implements PersonTemplate can be passed into this function    
    function Greet(person) {
        console.log("Hello, " + person.firstName);
    }
    // person class implements PersonTemplate interface 
    var person = /** @class */ (function () {
        function person(fname, lname, age, dob) {
            this.age = age;
            this.firstName = fname;
            this.lastName = lname;
            this.dob = dob;
        }
        person.prototype.WhatAge = function () {
            return this.firstName + " is " + this.age + " years old";
        };
        return person;
    }());
    // instances of person
    var Jimmy = new person("Jimmy", "McDougal", 23, new Date('1995-12-17T03:24:00'));
    console.log(Jimmy.WhatAge());
    var Ricardo = new person("Ricardo", "Chavez", 34, new Date('1987-11-12T01:11:00'));
    console.log(Ricardo.WhatAge());
    Greet(Ricardo);
})(NoTouchy || (NoTouchy = {}));
//# sourceMappingURL=interface.js.map