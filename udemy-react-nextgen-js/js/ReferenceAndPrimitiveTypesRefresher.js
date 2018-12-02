// not necessary nextgen, but important for the course

// primitive, copies a value
const number   = 1;
const num3 = number;
console.log(num3);



// By Reference, points to same object
const person = { name : 'Todd'};
const secondPerson = person;

console.log(secondPerson);
person.name = 'Dave';

// Second person now is dave also
console.log(secondPerson);

///*************** Solution *******************
const example = {name : 'Duddly'};
const noCopy = {
    ...example
};

console.log(noCopy);  // prints dudly as expected

example.name = 'Will Not Copy';
console.log(noCopy);  // prints dudly, not change as expected


// Also holds for arrays, even if primitves

const example2 = [1,2,3,4,5];
const copy = example2;

// no surprise it is now equal
console.log(copy);
example2[1] = 100;

// copy[1] == 100;
console.log(copy);
