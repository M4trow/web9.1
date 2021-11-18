
let a = {};
function A() {
    return a;
}
function B() {
    return a;
}
console.log(new A() == new B());
