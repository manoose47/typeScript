class PersonDetails {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username:string) {
        this.name = name;
        this.type = "";
        this.age = 0;
    }

    printAge() {
        console.log(this.age);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const personDetails = new PersonDetails("Jimmy","jmaster900");
console.log(personDetails.name, personDetails.username)


// Extending works similiar-ish to inheritence in c#, by default the derived class will have all the properties of the base class
// Super refers to the constructor of the base class, to overwrite it's values, we need to pass our values in to it.
// This seems a bit gammy

class Manus extends PersonDetails {
    constructor(userName: string, name: string) {
        super(name, userName);
    }
}
console.log(Manus);
console.log(new Manus("Manus", "manoose47"));


