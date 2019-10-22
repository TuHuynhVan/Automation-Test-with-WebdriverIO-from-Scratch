class Person {

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() { console.log(this._name) }
    getAge() { console.log(this._age) }
}

module.exports = Person;