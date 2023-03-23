class Fruit {
    constructor(color, taste) {
        this.color = color;
        this.taste = taste;
    }

    eat() {
        console.log(`You ate a ${this.constructor.name}.`);
    }
}

class Apple extends Fruit {
    constructor() {
        super('red', 'sweet');
    }

    eat() {
        console.log(`You ate a ${this.taste} Apple!`);
    }
}

class Test {
    constructor(test = 'hello') {
        this.test = test;
    }
}


const apple = new Apple();
// const orange = new Fruit('orange', 'tangy');
// orange.eat()
