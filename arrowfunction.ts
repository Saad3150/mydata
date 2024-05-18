//Ye aik arrow function hae jo k aik statement print karwaney k lye use hota hae 
//is k syntax main direct template literals ap use krsktey hain
//yani ap jo bhi statemnt likhna chahtey hain arrow function k baad likhain
//let greet=(name:string)=>`hello ${name}`;
//console.log(greet('Saad'));


//Is arrow function main age aur name default hain agr name aur age daena chahain to console main di 
//ja skti hae
//let intro=(age:number=19,name:string="User")=>`Hello My age is ${age} and my name is ${name}`
//console.log(intro());
//ab main yahan age dnga manually
//console.log(intro(18,'Maaz'));
let how=(name:string[],age:number[])=>{
name.forEach((name,index)=>{
  console.log(`Hello i am ${name} and my age is ${age[index]}` );
})

}
how(['Sara','tehami'],[12,13]);