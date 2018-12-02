<!-- Traditional -->
function printMyName(name) {
    console.log(name);
}

printMyName('old Method');

<!-- Using Const method -->
const printMyName2 = (name) => {
   console.log(name);
}

printMyName('Const method');

// return method

const multiply1 = (x,y) => {
    return x * y;
}

console.log(multiply1(2,3));

// return method no return since we have one line
const multiply2 = (x,y) => x * y;
console.log(multiply2(4,5));


let multiply3 = (x,y) => x * y;
console.log(multiply3(4,5));