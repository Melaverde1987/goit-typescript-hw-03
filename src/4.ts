class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[] = []
    protected door: boolean = false;
    
    constructor(protected  key: Key) {}

    comeIn(person: Person): void{
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
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
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
