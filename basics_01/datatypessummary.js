//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack(primitive)- copy given 
// Heap(non-primitive) - reference given

let myname="ansh"
let anothername=myname  //copy givem
anothername="hansh"  
console.log(myname);
console.log(anothername);

let userone={
    email: "ansh@mail.com"
    ,id: 11
}
let usertwo=userone //refernce given
usertwo.email="hansh@mail.com"
console.log(userone.email);
console.log(usertwo.email);
