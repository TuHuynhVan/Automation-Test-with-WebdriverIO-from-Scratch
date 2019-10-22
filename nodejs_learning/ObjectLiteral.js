let Person = {
    name: "Teo",
    age: 18,

    sayHello: function(){
        console.log('Hello');
    }
};

Person.sayHello();
let name = Person.name;
let age = Person.age;

console.log(name);
console.log(age);