
//DAY 1
//Variables are needed to maintain the entity.
// We can reassign the value when defined with let variable.
//We cannot reassign the value when defined with const variable.

//Program 1
let a = 10
console.log (a)
a = 100
console.log(a)

const h = 1000
console.log(h)
//h = 100

//Program 2
let a1 = 10
let b1 = 5

console.log(a1 + b1)
console.log(a1 - b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)

let x = 8
let y = 4

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

//10 pairs--------50 lines

function Calculator (x, y){
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
    }

    Calculator (4,5)
    Calculator (12,21)

    //function - keyword
    //Calculator - function name 
    //() - parenthesis
    //x,y - parameter
    //{} - blocks
    //{-----} - statements
    //Calculator (2,4)-----2,4 ---arguments


/*****************************************************************************************************/

//DAY 2
//Program 1

let balance = 100
console.log(balance)
balance = 1000
console.log(balance)

//Program 2
const pi = 3.14
console.log(pi)
//pi = 5.6

//Purpose of comment: 1) Trial and error case  2) If developer donot understand code at the first time,snippet code.

//  This is a single line 

/*
This is a multi line comment
*/

//Program 3
//Arithemetic Operation
// + - addition
// - - subtraction
// * - multiplication
// / - division
// % - remainder

let q = 8
let r = 2

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

//Function : In order to execute same set of operation multiple times, we use function.
//We have to call function by its name

 function Calculator1(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
 }

 Calculator1(6,4)
 Calculator(4,5)

 //Program 4

 //function without parameter and without return type

 function addition (){
    console.log(5+9)
 }

 addition()
 addition()
 addition()

 //function with parameter and without return type

 function additionB (x,y){
    console.log(2,4)
 }

 additionB(5,7)
 additionB(5,5)

 //function with parameter and with return type

 function additionC (a,b){
    return a+b
 }
 let q1 = additionC(2,4)
 console.log(q1)
 console.log(q1+5)
 console.log(q1/3)

 //return - keyword .....can store the value and can be reused.

