class Person {

    getName(name) {
        console.log('My Name is: ', name)
    }

    getAge() {
        console.log('I\m 18 years old!')
    }
}

let teo = new Person();
teo.getName();
teo.getAge();

let ti = new Person();
ti.getName('ti');