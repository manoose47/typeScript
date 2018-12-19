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
    ctor.prototype.add = function showAllDetails(){
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