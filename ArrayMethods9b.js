let arr = []
console.log(typeof arr)  // Object

/*Array Methods
map()
filter()
reduce()*/

//Program 1
let birthYear = [1996, 2004, 1985, 1934]
let currentAge = []
//age = currentYear - birthYear ==> 2024 - 1996 ==>
//output ==> [ 28, 20, 39, 90 ]

for (let i = 0; i < birthYear.length; i++) {
    // console.log(birthYear[i])
    let age = 2024 - birthYear[i]
    currentAge.push(age)
}
console.log(currentAge)

//Map() => perform action with each and every element of array.
// Return type is array.

//             0    1    2    3
birthYear = [1996,2004,1985,1934]
let result = birthYear.map(function (element, index, array) {
    //console.log(element,index,array)
    return 2024 - element
})
console.log(result)


//Add one on each element
let numbers = [11,22,33,44,55,66,77,88,99]
let e3 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(e3)


//Program 2

//            0  1  2  3  4  5  6
let marks = [33,44,55,34,66,88,99]
let above50 = []

for (let i = 0; i < marks.length; i++){
    if (marks[i] > 50){
        console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)


//filter()
//Action - compare element based on condition & do not change the element of array
//Return type - array

let e5 = marks.filter(function(el){
    return  el > 50
})
console.log(e5)

//Find out deposits and withdrawal
let transactions = [11,22,33,44,-44,-78,56,-34]

let deposit = transactions.filter(function(el){
    return el > 0
})
console.log(deposit)

let withdrawal = transactions.filter(function(el){
    return el < 0
})
console.log(withdrawal)


//Program 3
//reduce() - return single value

let numbersA = [11,22,33]
let total = 0

for(let i = 0; i < numbersA.length; i++){
    //console.log(i)
   // console.log(numbersA[i])

    total = total + numbersA[i]
    //         0  +  11 --------->  11
    //         11  +  22 -------->  33
    //         33  +  33 -------->  66
}
console.log(total)

let e7 = numbersA.reduce(function(acc,el,index,arr){
    return acc + el
},0)

console.log(e7)


//Program 4
//forEach()

let student = ["arina","sachin","jyoti","roshini"]
for (let i = 0; i < student.length; i++){
    console.log("Hello " + student[i])
}

student.forEach(function(el){
    console.log("Hello " + el)
})
         





