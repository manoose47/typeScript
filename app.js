var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log("Arrow functions boiii");
// simple Multiply
var multiply = function (num1, num2) {
    return num1 * num2;
};
// implement type
var divide = {
    calc: function (num1, num2) {
        return num1 / num2;
    }
};
console.log(multiply(10, 5));
console.log(divide.calc(10, 5));
console.log("rest & spread");
//the elipsis is the spread function syntax, this will convert the array into a list of values,
//which will allow one to carry out functions which cannot be performed on an array.
var numbers = [1, 2, 3, 4, 5];
console.log.apply(console, numbers);
// This won't work as, array cannot be passed into function
//console.log(Math.max(numbers));  
// But using the spread operator will allow one to pass the 'array' in
console.log(Math.max.apply(Math, numbers));
//Now going in the complete opposite direction, what if we want to pass in multiple values to create an array, without needing to define separate params for each value?
// We can use the Rest operator, which should look familiar, because it is also the spread operator, 
//the difference being context: spread when used as part of a function call, rest when used as part of a function declaration
var makeArrayOldWay = function (val1, val2) {
    return [val1, val2];
};
// See this shit would get tedious quick, if we needed to add another 30 numbers into the signature.. for some reason.
console.log.apply(console, makeArrayOldWay(1, 2));
//so we change our input type into an array with the rest operator on the variable name
var makeArrayNewWay = function () {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    return vals;
};
console.log.apply(console, makeArrayNewWay(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18));
console.log("Destructuring");
//whoa shit son!
// destructing lets one easily grab values from an array or object and assign them to separate variables
// Arrays:
var cruddyMcArray = makeArrayNewWay(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// ouput cruddy array values, nothing special here
console.log.apply(console, cruddyMcArray);
// but look at this boiiiiiiii array brackets on left of equals sign, with new arrays values assigned to the given variable names
var firstIndex = cruddyMcArray[0], secondIndex = cruddyMcArray[1];
console.log(firstIndex, secondIndex);
//now for objects its easier still:
var Person = {
    Username: "Billy",
    age: 34,
    birthDay: "12-01-02"
};
// heres what that object looks like with types assigned
var Person2 = {
    Username: "Billy",
    age: 34,
    birthDay: "12-01-02"
};
//note in this case, the order doesn't matter, so long as the variable names match
var birthDay = Person.birthDay, Username = Person.Username;
console.log(Username, birthDay);
// we can also use the ... operator to clone an object.. behold!
var Mooseman = __assign({}, Person);
console.log("Template Literals");
var myUser = "Manus";
// traditional way of concatenating and adding a string.
var greeting = "Hello I'm, " + myUser;
// template literal method, instead of quotes we use backTicks which can be used to create multiline strings
var greeting2 = "Yo this is " + myUser + ",\nwhats the haps?";
console.log(greeting);
console.log(greeting2);
//# sourceMappingURL=app.js.map