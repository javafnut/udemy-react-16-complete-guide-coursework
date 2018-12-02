// class Person{
//         name : 'Todd';
//         printFooBar  = () => {
//             console.log('FOO BAR!!');
//         }
// }


class Foo {
    constructor(x) {
        this.x = x;
        this.y = 432;
    }

    point() {
        return 'Foo(' + this.x + ', ' + this.y + ')';
    }
}

let myfoo = new Foo(99);
console.log(myfoo.point()); // prints "Foo(99, 432)"


// Another example

class  Base {
    foo() {return 'foo in base';}
    bar() {return 'bar in base';}
    whizKid() {return 'whiz in base';}
}

class Child extends Base {

    foo() {return 'foo in child';}
    bar() {return 'bar in child';}
    whiz() {return 'whiz in child';}
}

base = new Base();
console.log(base.whizKid());

child = new Child();
console.log(child.whizKid());