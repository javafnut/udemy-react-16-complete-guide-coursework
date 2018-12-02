const numbers = [1,2,3];


// creates a new array
const doubleNumberArray = numbers.map( (num) =>{
    return  num * 2;
});

console.log(doubleNumberArray);

//======================================
const names = ['foo','bar','clusterfuck']

const dumpNames = names.map((str) => {
    return str;
})

console.log(dumpNames);

