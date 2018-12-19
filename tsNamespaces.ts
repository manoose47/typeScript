namespace Horses{
    
    export class Horse{

        constructor() {
            this.height = 0;
            this.color = "";
            this.name = "";            
        }

        height: number;
        color: string;
        name: string;
    }

    let hasHooves = true;
}

// referencing object from outside of namespace: Only exported items are available outside the namespace. hashooves is inaccessible 
let horse = new Horses.Horse()
horse.color = "brown";
horse.name = "Francis";
horse.height = 6;

console.log(horse.color)

// we can declare horse again outside of the namepace, out here its in global scope
class Horse{

}