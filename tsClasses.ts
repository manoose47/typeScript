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

class Plant{
    private _species: string = "";

    // getters and setters are similar
    get species() {
        return this._species;        
    }

    set species(value:string) {
        if(value.length > 3)
        {
            this._species = value;
        }
        else{
            this._species = "Default";
        }
    }
}

let plant = new Plant()
plant.species ="Green Plant";
console.log(plant.species);

class Helper {
    static pi: number = 3.14;
    
    static CalcDiameter(diameter: number) : number{
        return Helper.pi * diameter;
    }
}

// static methods can be accessed from anywhere, even from outside this helper class, one can reference Helper.pi
// or Helper.CalcDiameter(10);

console.log(Helper.CalcDiameter(100));
