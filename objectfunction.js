"use strict";
//jaisa k ap logo ne daikha k main ne aik function banaya hae jo k 2 arrays par mushtamil hae aik array
//jo k string hae us main 2 strings hain aur second array main do numbers hain 
//yad rahey k typescript ye samajhney s qasir hae k 1st array ka jo first string hae aur second array k 
//first number ko us k sath print karwayega q k ap ne isey command di hae ye in dono ko srf do arrays ka data
//samajh rha hae jisey usey simultaneously print karwana hae ye is ki example hae :
//let identity=(name:string[],age:number[])=>{
//name.forEach((name,index)=>{
//console.log(`Hello my name is ${name} and age is ${age[index]}`);
// })
//}
//identity(["saad","taha"],[12,32]);
Object.defineProperty(exports, "__esModule", { value: true });
var student = function (id) {
    id.forEach(function (Person) {
        console.log("Hello! My Name is ".concat(Person.name, " and Age is only ").concat(Person.age));
    });
};
student([{ name: 'saad', age: 18 }, { name: 'taha', age: 19 }]);
