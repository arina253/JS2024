//map()
let birthYear = [1989,1990,1991,1992]
//[35,34,33,32]

let q1 = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(q1)


let numbers = [11,22,33,44,55]
//[21,32,43,54,65]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
}) 
console.log(q2)


//filter()
let marks = [89,22,45,34,78,66]
let q3 = marks.filter(function(el,index,arr){
    return el > 50 && el < 89
})
   console.log(q3)


//reduce()
let numbersA = [11,22,33]
let q4 = numbersA.reduce(function(acc,el,index,arr){
    return el + acc
},0)  
console.log(q4)


//forEach()
let cities = ["pune","goa","delhi","mysore","chennai"]
let q5 = cities.forEach(function(el,index,arr){
    console.log("welcome " + el)
})
//console.log(q5)

//forEach() will not return anything.If stored in a variable, it will give undefined.


//find()
//give first occurence of element from left.

//              0  1  2  3  4  5
let numberB = [22,33,44,55,66,77]
let q6 = numberB.filter (function(el,index,arr){
       return el > 40
})
console.log(q6)

let q7 = numberB.find(function(el,index,arr){
      return el > 40
})
console.log(q7)


//findIndex()
// give index of first occurence of element from left
let q8 = numberB.findIndex(function(el,index,arr){
    return el > 40
})
console.log(q8)


//every()
//work on each element of array and gives true if each condition is true.
let numbersC = [11,22,33,44,55,66,77,88]
let q9 = numbersC.every (function(el,index,arr){
    return el > 10
})
console.log(q9)


//some()
//work on each element of array and gives true if atleast one condition is true.

let q10 = numbersC.some(function(el,index,arr){
    return el > 20
})
console.log(q10)


//slice()
//will give all the elements from start index to last index

//           0   1   2   3   4   5   6   7   8    9
let nums = [111,222,333,444,555,666,777,888,999,1111]
//         -10  -9  -8  -7  -6  -5  -4  -3  -2   -1 

//nums.slice(startIndex,endIndex(not included))

console.log(nums.slice(3))
console.log(nums.slice(3,6))
console.log(nums.slice(-10,6))
console.log(nums.slice(1,-3))
console.log(nums.slice(-3))
console.log(nums.slice(-1,-3))   //[]
console.log(nums.slice(-2,-1))  // [999]
console.log(nums.slice(-5,-6))  // []
console.log(nums.slice(4,3))    // []


