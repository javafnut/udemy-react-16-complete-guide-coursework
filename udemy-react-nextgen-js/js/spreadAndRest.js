

// Spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];

console.log(newNumbers);

const person = {
    name : 'Max',
    age : 22
};

const newPerson = {
    ...person,
    name : 'TJ',
    age : 28
}

const fooPerson = {
    ...newPerson,
    name : 'TAJ',
    age : 25
}

console.log(person);
console.log(newPerson);
console.log(fooPerson);

///===============================================================================

// spread
// === checks for type and equality

const filter = (...args) => {
    return args.filter( el => el === 1);
}

console.log(filter(1,2,3));