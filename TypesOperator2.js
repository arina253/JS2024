//Types
let a = 60
console.log(a)
console.log(typeof a)
//number - 2, -2, 9.0, -9.8, 0

let y = true
console.log(y)
console.log(typeof y)
//boolean - true, false

let z = "arina"
console.log(z)
console.log(typeof z)
//string - "arina", "a", "A", 'C', "2345RHRU&*^%", " "


// value are same and type are different 
console.log(typeof 10)
console.log(typeof '10')

/*********************************************************************************************************/

//Comparison operators

// > , < , >= , <=
// == , !=  -----> two sign check value
// === , !== -----> three sign check value & type

console.log( 5 === '5')//false
console.log( 5 !== 5)//false        
console.log( 5 === 5)// true
console.log( 7 !== 5)//true
console.log( 7 == '7')//true
console.log( 7 !== 5)//true
console.log( 5 < 5)>//false
console.log( 6 === 5)//false
console.log( 5 <= 5)//true
console.log( 6 >= 5)//true
console.log( 7 <= 5)//false
console.log( 7 <= 7)//true
console.log( 5 >= 5)//true

//logical operators

// and ----> &&

// true  &&  true  ======>  true
// true  &&  false  ======> false
// false  &&  true  ======> false
// false  &&  false  ======> false

console.log(4 == 4 && 5 > 2)
console.log(4 > 2 && 5 !== 5 )
console.log(2 === 4 && 5 > 2)
console.log(4 !== 4 && 5 < 2)

// or -----> ||

// true   ||   true  ====> true
//true    ||   false ====> true
//false   ||   true  ====> true
//false   ||   false ====> false

console.log(8 == 8 || 9 > 7)
console.log(8 !== 9 || 5 > 8)
console.log(4 < 2 || 4 > 3)
console.log(5 !==5 || 7 >= 8)

// !
console.log (!(5 == 5))  //false
console.log (!(9 != 9)) // true
