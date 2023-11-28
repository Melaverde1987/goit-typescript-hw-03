class Key {
    constructor(private signature: number = Math.random()) {
        this.signature = signature;
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[] = []
    protected door: boolean = false;
    
    constructor(protected  key: Key) {}

    comeIn(person: Person){
        if(this.door) {
            this.tenants.push(person)
            console.log(`Welcome home, ${person.getKey().getSignature()}!`);
        } else {
            console.log("The door is closed.");
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }
    
    openDoor(key: Key): void {
        if (key === this.key) {
            this.door = true;
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
