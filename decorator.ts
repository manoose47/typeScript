//A decorator is a normal function, right up until the @ sign is used to invoke it
//decorators act as functions that take a single argument: a class constructor:

function bantAndDec(ctor: Function) {
    console.log(ctor);
}

//upon execution, the bantAndDec decorator will show us this classes constructor

@bantAndDec
class Bro {

    name: string = "Andy";

    constructor(name: string) {
        this.name = name;
        
    }
    call() {
     console.log(`Hey ${this.name}`);   
    }
}

let Jimmy = new Bro("jimmy");
Jimmy.call();

// Decorators can be used to hijack classes and add properties & fields to the class

function noChoiceMcDec(ctor: Function)
{
    ctor.prototype.showAllDetails = function() {
        console.log(this);
    }
}

@noChoiceMcDec
class privatePerson {
    private name: string =  "Fred";
    private fear: string = "snakes";
    private age: number = 39;
}

let Fred = new privatePerson();
//Interstingly, typescript doesn't recognise that the showAllDetails method of the decorator 
//is now a part of the new class, so we need to cast the class with the any type
//Fred.showAllDetails()  -- will error
(<any>Fred).showAllDetails();


// Now were using a decorator, based on whether a condition is met. So we refer to the boolMcDec decorator through the Doctor boolean function 
function boolMcDec(ctor: Function)
{
    ctor.prototype.areYouDiseased = "Bad news!"
}

// needed to disable stict null checks in tsconfig to fix this. This seems hacky as fuck
function Doctor(value: boolean) {
    return value ?  boolMcDec : null;
}

@Doctor(true)
class AverageJoe
{
    name: string = "Joe";
    build: string = "average";
}


//bad news joe
const joe = new AverageJoe();
console.log((<any>joe).areYouDiseased)