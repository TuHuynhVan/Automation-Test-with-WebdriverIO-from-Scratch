let Person = require('./Person')

class SuperMan extends Person {

    constructor(name) {
        super(name);
    }

    // Overwrite from the super class 
    sayHello() {
        super.sayHello();
        console.log('I\'m a Super man!')
    }

    // Extend more
    canFly() {
        console.log('I can fly')
    }
}

module.exports = SuperMan