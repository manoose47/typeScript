// generic class - Type t can be a number or string only
class MyMap <T extends number | string> {

    // map acts as a dictionary for storing key value pairs
    private map: {[key:string] : T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;     
    }

    getItem(key: string)
    {
        console.log(this.map[key])
    }

    clear() : void
    {
        this.map = {}
    }

    printMap() :void
    {
        for( let key in this.map)
        {
            console.log(key);
        }
        console.log(this);
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('Apples', 5);
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
