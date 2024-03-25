//Array Methods : action and return tyype

//push()
let names = ["arina","sachin","jyoti","esha"]
let q1 = names.push("roshini")
console.log(q1)
console.log(names)

//unshift()
let q2 = names.unshift("sabita")
console.log(q2)
console.log(names)

//pop()
let fruits = ["banana","orange","grapes","guava"]
let q3 = fruits.pop()
console.log(q3)
console.log(fruits)

//shift()
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

//indexOf()
let animals = ["tiger","dog","cat","lion"]
let q5 = animals.indexOf('tiger')
console.log(q5)

let q6 = animals.indexOf("Tiger")
console.log(q6) 
//Returns -1 if the element is not found in the array.

//includes()
let city = ["sanepa","yetkha", "baneshwor","naradevi"]
let q7 = city.includes("yetkha")
console.log(q7)

//reverse()
let q8 = city.reverse()
console.log(city)
console.log(q8)

//at()
let country = ["india", "nepal", "japan", "china"]
let q9 = country.at(2)
console.log(country)
console.log(q9)

//concat()
let a = [11,22,33]
let b = [44,55,66]
let q10 = a.concat(b)
console.log(q10)
console.log(a)
console.log(b)

//join()
let info = ["arina", "joshi", "261253"]
let q11 = info.join ("-")
console.log(q11)
let q12 = info.join ("@")
console.log(q12)

//---------------------------------------------------------------------------------------------------------------------//


// Program 1
//                0    1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = []

//[2024-1989, 2024-1990, 2024-1991, 2024-1992]
//[35, 34, 33, 32]

for (let i = 0; i < birthYear.length; i++){
    //console.log(i)
    //console.log(birthYear[i])
   // console.log(2024 - birthYear[i])
   let x = 2024 - birthYear[i]
   ages.push(x)
}
console.log(ages)


// Program 2

let marks = [11,44,55,33,66,77]
let above50 = []
//[55,66,77]

for (let i = 0; i < marks.length; i++){
    //console.log(i)
    //console.log(marks[i])
    if (marks[i] > 50){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above50)


// Program 3

let numbers = [11,22,33]
let total = 0

for (let i = 0; i < numbers.length; i++){
    //console.log(i)
    console.log(numbers[i])
    total = total + numbers[i]

    // 0    +    11  --------> 11
    // 11    +   22  --------> 33
    // 33    +   33  --------> 66
}
console.log(total)


// Program 4

//                0         1          2          3
let cities  = ["nagpur","chennai","bangalore","kolkata"]
for ( let i = 0; i < cities.length; i++){
    //console.log(i)
    console.log("welcome " + cities[i])
}