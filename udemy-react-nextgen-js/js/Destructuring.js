// extract array or object properties and store them in variables

// differs from spread, where spread removes all properties, elements and creates arrays


// assigns by offset
[a,b] = ['Hello', 'Max'];

console.log(a);
console.log(b);

// object destruct

let foo = {name : 'MaxIt', age : 28};
let {name : fooA} = foo;
console.log(fooA);

// example arrays
const numbers = [1,2,3,4];

// first 2
[a,b] = numbers;

// first and last.. skip 2
[a,,b] = numbers;

// more complicated example

let complicatedObj = {
    arrayProp : ['Zapp',{second : 'Brannigan'}] }

let {arrayProp : [first,{second}]} = complicatedObj;
console.log(first);
console.log(second);




