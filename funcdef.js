function greet(name) {
    if (name === void 0) { name = 'user'; }
    console.log("Hello ".concat(name));
}
greet("saad"); //ye ham ne is k name ko default rakha hae
console.log(greet());
