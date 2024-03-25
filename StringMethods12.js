//STRING -- OBJECT

let first_name = "arina"
console.log(first_name)
console.log(typeof first_name)

//length
let q1 = first_name.length
console.log(q1)

//Method
//Action
//Return type

let last_name = "joshi"

//Program 1
//toUpperCase()
let s1 = last_name.toUpperCase();
console.log(s1)

//toLowerCase()
let middle_name = "Great"
let s2 = middle_name.toLowerCase();
console.log(s2)

//Program 2
//Chaining
let s3 = "hello".toUpperCase().toLowerCase().length
console.log(s3)
// let s4 = "hello".toUpperCase().toLowerCase().length.toUpperCase()
// console.log(s4).......not same datatype


//Program 3
//startsWith(),endsWith()
let fruit = "apple"
let s4 = fruit.startsWith("App")
let s5 = fruit.startsWith("a")
let s6 = fruit.startsWith("A")

let s7 = fruit.endsWith("e")
let s8 = fruit.endsWith("le")
let s9 = fruit.endsWith("lle")

console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)
console.log(s8)
console.log(s9)


//Program 4
//includes()

let vegetable = "brinjal"
//  0   1   2   3   4   5   6
//  b   r   i   n   j   a   l

let s10 = vegetable.includes('i')
let s11 = vegetable.includes('in')
let s12 = vegetable.includes ('inJ')
console.log(s10)
console.log(s11)
console.log(s12)

//indexOf()
let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)
console.log(s14)       //Output : -1


//Program 5
//trimStart(),trimEnd(),trim()

let a11 = ' hello'
console.log(a11)

console.log(a11.length)
s15 = a11.trimStart()    //remove space from front/left
console.log(s15.length)

a11 = ' hello '
console.log(a11.length)
let s16 = a11.trimEnd()  //remove space from back/right.
console.log(s16.length)

a11 = ' hello '
console.log(a11.length)
s17 = a11.trim()
console.log(s17.length)   //remove space from front and back



//Program 6
info = "I am learning javascript"
s18 = info.replace("javascript","python")
console.log(s18)
