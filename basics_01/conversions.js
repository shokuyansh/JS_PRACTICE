let score="33"
// console.log(typeof score)
// console.log(typeof(score))
let scoreinNumber=Number(score)
// console.log(typeof scoreinNumber)
// console.log(scoreinNumber)
/*  
    "33" -> 33
    "33abd"-> NaN(Not A Number)
    True -> 1
    False -> 0
    "ansh"->NaN
*/

let isloggedIn="ans"

let booleanloggedIn=Boolean(isloggedIn)

// console.log(booleanloggedIn)
/*
    1-> true
    0->false
    ""-> false
    "someString"->true
*/
let someValue=undefined
let valueinString=String(someValue)
// console.log(typeof valueinString)
// console.log(valueinString)

// _______________________
// ******operations****
// _______________________
let value=3
let negvalue=-value

// console.log(negvalue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)
let str1="fuck"
let str2="world"
let str3=str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log(1+2+"2");  if string in the end , int behaves normally
// console.log("1"+2+2);  if string in start all after it behave like string
let n1,n2,n3
// n1=n2=n3=2+2 not preferred
let gamecounter=100
++gamecounter
console.log(gamecounter);
gamecounter++
console.log(gamecounter);
