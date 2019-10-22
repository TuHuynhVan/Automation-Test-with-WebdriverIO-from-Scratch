class Person {

    constructor(name){
        this._name = name;
    }

    sayHello(){
        console.log('Hi, I\'m ' + this._name)
    }

    sayGoodBye(){
        console.log('Bye!')
    }
}

module.exports =  Person;