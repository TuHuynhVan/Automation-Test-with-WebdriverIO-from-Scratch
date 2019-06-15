let Person = require('./Person.js');

let bob = new Person(); // bob is an instance of Person Class
bob.getName();
bob.getAge();

console.log(bob)
bob._name = 'bob'

console.log(bob)
bob.getName();
