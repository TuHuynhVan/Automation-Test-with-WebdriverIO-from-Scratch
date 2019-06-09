class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName(){
        console.log(this._name);
    }

    getAge(){
        console.log(this._age);
    }

}

let bob = new Person('bob', 18);
bob.getName();
bob.getAge();

console.log(bob)