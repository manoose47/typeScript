type BankAccount = {money: number, deposit: (value : number) => void };

let bankAccount : BankAccount = {
    money:2000,
    deposit(value : number) {
        this.money += value;
    }
}

let myself : {name:string, bankAccount: BankAccount, hobbies:string[]} = {
    name: "Max",
    bankAccount:bankAccount,
    hobbies: ["Sports", "Cooking"]

}

myself.bankAccount.deposit(3000);

console.log(myself);

console.log("Arrow functions boiii")

// simple Multiply
let multiply = (num1: number, num2: number) : number => {
    return num1 * num2;
    }

// create type so we can do different types of calculations
type calc2nums = {calc: (num1: number, num2: number) => number};

// implement type
let divide : calc2nums = {
    calc(num1: number, num2: number){
        return num1 / num2;
    }
};

console.log(multiply(10,5));
console.log(divide.calc(10,5));

console.log("rest & spread");


//the elipsis is the spread function syntax, this will convert the array into a list of values,
//which will allow one to carry out functions which cannot be performed on an array.
const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);
// This won't work as, array cannot be passed into function
//console.log(Math.max(numbers));  

// But using the spread operator will allow one to pass the 'array' in
console.log(Math.max(...numbers))

//Now going in the complete opposite direction, what if we want to pass in multiple values to create an array, without needing to define separate params for each value?
// We can use the Rest operator, which should look familiar, because it is also the spread operator, 
//the difference being context: spread when used as part of a function call, rest when used as part of a function declaration

let makeArrayOldWay = (val1:number, val2: number) : number[] => {
return [val1, val2];
}

// See this shit would get tedious quick, if we needed to add another 30 numbers into the signature.. for some reason.
console.log(...makeArrayOldWay(1,2));

//so we change our input type into an array with the rest operator on the variable name
let makeArrayNewWay = (...vals:number[]) => {
    return vals;
}

console.log(...makeArrayNewWay(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18));

console.log("Destructuring");
//whoa shit son!
// destructing lets one easily grab values from an array or object and assign them to separate variables
// Arrays:

let cruddyMcArray = makeArrayNewWay(1,2,3,4,5,6,7,8,9,10);
// ouput cruddy array values, nothing special here
console.log(...cruddyMcArray)
// but look at this boiiiiiiii array brackets on left of equals sign, with new arrays values assigned to the given variable names
let [firstIndex, secondIndex] = cruddyMcArray;
console.log(firstIndex, secondIndex);

//now for objects its easier still:
let Person = {
    Username : "Billy",
    age: 34,
    birthDay: "12-01-02"
};

// heres what that object looks like with types assigned
let Person2 : {Username:string, age:number, birthDay:string}  = {
    Username : "Billy",
    age: 34,
    birthDay: "12-01-02"
};

//note in this case, the order doesn't matter, so long as the variable names match
let {birthDay, Username} = Person;
console.log(Username, birthDay)

// we can also use the ... operator to clone an object.. behold!
let Mooseman = {...Person}

console.log("Template Literals");
const myUser = "Manus";
// traditional way of concatenating and adding a string.
const greeting = "Hello I'm, "+ myUser;
// template literal method, instead of quotes we use backTicks which can be used to create multiline strings
const greeting2 = `Yo this is ${myUser},
whats the haps?`

console.log(greeting);
console.log(greeting2);
