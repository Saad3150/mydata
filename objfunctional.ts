export{}
interface Person {
    name: string;
    age: number;
}

let how = (people: Person[]) => {
    people.forEach(person => {
        console.log(`Hello, I am ${person.name} and my age is ${person.age}`);
    });
}

how([{name: 'Sara', age: 12}, {name: 'Tehami', age: 13}]);
let few=(name:string="user")=>`My name is ${name}`
let fewName=few()
console.log(fewName);