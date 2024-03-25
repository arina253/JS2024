//STRING

let first_name = "arina"
console.log(first_name)

let last_name = "joshi"
console.log(last_name)

let middle_name = "great"
console.log(middle_name)

let fn = "arina"
let ln = "joshi"

//My firstName is arina and my lastName is joshi
console.log("My firstName is " + fn + " my lastName is " + ln)

//Program 2 : String Interpolation
console.log(`My firstName is ${fn} and my lastName is ${ln}`)


//Program 3

//string + number ------> string
//number + string ------> string
//string + string ------> string
//number + number ------> number

let a = 10
let b = 15
let c = "hello"

console.log(a + b + c)
// number + number + string
// 25 + "hello"  
// 25hello

console.log(c + a + b)
// string + number + number
// "hello10" +  15
// hello1015

console.log(b + c + a)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)


//String ------------> Object ------------> Properties and methods

let city = "pune"
console.log(city)
let e = city[0]
console.log(e)

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

//Program 2
//action and return type

let city3 = "chandrapur"
// 0    1   2   3   4   5   6   7   8   9
// c    h   a   n   d   r   a   p   u   r

console.log(city3.length)


for (let i = 0; i < 10; i++) {
    console.log(city3[i])
}


for (let i = city3.length - 1; i >= 0; i--) {
    console.log(city3[i])
}


//Program 3
let city4 = "kathmandu"

let i1 = 0
while (i1 < city4.length) {
    console.log(city4[i1])
    i1 = i1 + 1
}

let i2 = city4.length - 1
while (i2 >= 0) {
    console.log(city4[i2])
    i2 = i2 - 1
}


//Program 4
let city5 = "pune"
let revString = ""

for (let i = 0; i < city5.length; i++) {
    //console.log(city5[i])
    revString = city5[i] + revString

    //p + ""  ==========> p
    // u + p   ==========> up
    // n + up  ==========> nup
    // e + nup ==========> enup
}

console.log(revString)
