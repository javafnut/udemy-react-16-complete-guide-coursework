// same as most class in other lang
// can have properties and methods



class Human {
    constructor() {
        this.gender = 'male';
        this.isChild = 'No';
    }

    printGender() {
        console.log(this.gender);
    }

    printChildYN() {
        console.log(this.isChild);
    }
}


// must user super keyword if constructor is used in parent class
class Person extends Human {
    constructor(name) {
        super();
        let _name = name;

        // lets override is child
        this.isChild = 'Yes';
        this.printMyName = function(){
            console.log(_name );
        }

        this.printAgain = () => {
            console.log(_name);
        }
    }
}

const myPerson = new Person("Todd");
myPerson.printMyName();
myPerson.printAgain();
myPerson.printGender();
myPerson.printChildYN();

class Animal {
    species = 'dog';
    printSpecies = () => {
        console.log(this.species);
    }
}

class LandAnimals extends Animal {
    species = 'cat';
    name = 'tj';

    printMySpecies = () => {
        console.log(this.name);
    }
}

const myAnimal = new LandAnimals();
myAnimal.printSpecies();
myAnimal.printMySpecies();


//=====================================================  runs on es6 with babel to es4

// class Human {
//     gender = 'male';
//
//     printGender = () => {
//         console.log(this.gender);
//     }
// }
//
// class Person extends Human {
//
//     name = 'FooBar';
//
//     printFooBar = () => {
//         console.log(this.name);
//     }
// }
//
// const testit = new Person();
// testit.printFooBar();
// testit.printGender();