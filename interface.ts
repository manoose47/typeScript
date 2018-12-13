interface Person {
    firstName: string;
    lastName: string;
    age: number;
    dob: Date;
}

function Greet(person: Person){
console.log("Hello, " + person.firstName)
}