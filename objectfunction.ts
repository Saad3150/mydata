//jaisa k ap logo ne daikha k main ne aik function banaya hae jo k 2 arrays par mushtamil hae aik array
//jo k string hae us main 2 strings hain aur second array main do numbers hain 
//yad rahey k typescript ye samajhney s qasir hae k 1st array ka jo first string hae aur second array k 
//first number ko us k sath print karwayega q k ap ne isey command di hae ye in dono ko srf do arrays ka data
//samajh rha hae jisey usey simultaneously print karwana hae ye is ki example hae :
//let identity=(name:string[],age:number[])=>{
  //  name.forEach((name,index)=>{
    //    console.log(`Hello my name is ${name} and age is ${age[index]}`);
   //})
//}
//identity(["saad","taha"],[12,32]);








//Hamarey pas is s aik aur zyada asan tareeka mojud hae jo k dono arrays k data ko simultaneously print 
//karwayega aur ye bhi samjhega k string wali array main jo first index par string hae wo second array k 
//first index par jo number hae wo first string ki age hae let me clear
export{}
interface Person{
   name:string,
   age:number,
}
let student=(id:Person[])=>{
id.forEach(Person => {
    console.log(`Hello! My Name is ${Person.name} and Age is only ${Person.age}`)
});
}
//student([{name:'saad',age:18},{name:'taha',age:19}]);
//yahan main ne sab se pehley name aur age ko aik object bna dya hae ab typescript samajh chuka hae k name aur 
//number ye kisi aik object ki information hae jo array ki shakal main hogi
//phr main ne function create kya jo k arraow unction kehlata hae usey student ka name de dya
//yad rhey k ab student function jb bhi call krega wo aik object ko call krega jo k Person hae 
//typescript main class bnaney k lye aik object ko jo bhi name dya jata hae usey argument main aik aur
//unique name de daitey hain is ka kam ye hota hae k kisi khas qism k parameter k object ko koi unique name de dya jaye
//q k ab jo data isey string ki surat main dya jayega us k arguments do he hngy jaisey k ap upar daekh rhey hain
//phr hm person object k upar uski unique id ko le k us p for Each loop ka istemal karaingy ta k loop har object k har element pr apply 
//ho jo k array k andar hain
//Phr console kya jayega jo bhi print karwana chahtey hain 
//akhir main hm apney variable ko jo k function ban chuka hae call kr k aik array main do objects pass karaingy with ages

