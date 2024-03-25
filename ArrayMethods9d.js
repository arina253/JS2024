// slice()
//              0       1         2         3       4
let names = ["arina","sachin","sriman","keerti","saanvi"]
//             -5      -4       -3       -2        -1
         
//names.slice(startIndex, endIndex(not included))

let r1 = names.slice(2,5)
let r2 = names.slice(1)
let r3 = names.slice(1,3)

console.log(r1)
console.log(r2)
console.log(r3)
console.log(names.slice(1,-1))

// splice()
//Gym---
//action ---- exercise
//return -----health

let namee = ["ram","sam","hari","sita","rita"]
let q1 = namee.pop()
console.log(q1)              //rita

let q2 = namee.shift();
console.log(q2)             //ram

//              0    1     2      3      4
let namess = ["ram","sam","hari","sita","rita"]

//namess.splice(startIndex, numberOfElementstoBeDelete)

let e2 = namess.splice(1,1)
console.log(e2)     //[ 'sam' ]
console.log(namess)//[ 'ram', 'hari', 'sita', 'rita' ]

namess.splice (2,1,"santosh")
console.log(namess)  //[ 'ram', 'hari', 'santosh', 'rita' ]


//reverse()
let q = [10,20,30]
q.reverse()
console.log(q)

//concat()
let a  = [11,22,33]
let b = [44,55,66]
let c = a.concat(b)
console.log(c)

//fill()
//         0  1  2  3  4  5
let a1 = [11,22,33,44,55,66]
let a2 = a1.fill("-",1,5)
console.log(a2)   // [ 11, '-', '-', '-', '-', 66 ]

//flat()
//                    0                    1
//                0         1          0        1            0        1
let states = [["nagpur","mumbai"], ["jaipur","udaipur"],["bhopal","indore"]]
console.log(states[0][1])
console.log(states[1][1])
e3 = states.flat()
console.log(e3)

//sort( only alphabets)
let country = ["nepal","india","japan","pakistan"]
country.sort()
console.log(country)

//join()
let info = ["Arina","joshi",9803753479]
console.log(info.length)
e3 = info.join('-')
console.log(e3)
console.log(typeof e3)

//at()

//
let a11 = [111,222,333,444,55555,66666]
let b11 = a11.indexOf(333)
let b12 = a11.at(3)
console.log(b11)
console.log(b12)