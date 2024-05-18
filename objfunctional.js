"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var how = function (people) {
    people.forEach(function (person) {
        console.log("Hello, I am ".concat(person.name, " and my age is ").concat(person.age));
    });
};
how([{ name: 'Sara', age: 12 }, { name: 'Tehami', age: 13 }]);
var few = function (name) {
    if (name === void 0) { name = "user"; }
    return "My name is ".concat(name);
};
var fewName = few();
console.log(fewName);
