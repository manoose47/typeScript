namespace NoTouchy {

    interface PersonTemplate {
        firstName: string;
        lastName: string;
        age: number;

        WhatAge() : string;
    }
    
// anything that implements PersonTemplate can be passed into this function    
    function Greet(person: PersonTemplate){
    console.log("Hello, " + person.firstName)
    }

// person class implements PersonTemplate interface 
    class person implements PersonTemplate{
        firstName: string;
        lastName: string;
        age: number;
        dob: Date;

        constructor(fname: string, lname: string, age:number, dob: Date){
            this.age = age;
            this.firstName = fname;
            this.lastName = lname;
            this.dob = dob;   
        }

        WhatAge()
        {
            return  `${this.firstName} is ${this.age} years old`;
        }

    }

// instances of person
    let Jimmy = new person("Jimmy", "McDougal", 23, new Date('1995-12-17T03:24:00'))
    console.log(Jimmy.WhatAge());
    
    let Ricardo = new person("Ricardo", "Chavez", 34, new Date('1987-11-12T01:11:00'))
    console.log(Ricardo.WhatAge());

    Greet(Ricardo);
}
