
//Destructuring

//Program 1
//Array stores the value by index
//              0       1       2
let names = ["arina","jyoti","sony"]

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a)
console.log(b)
console.log(c)

//Destructuring
let[a1,b1,c1] = names
console.log(a1)
console.log(b1)
console.log(c1)

//Program 2
//Can skip also.
let fruits = ["apple","banana","mango"]
let [q1,,q3]=fruits
console.log(q1)
console.log(q3)

//Program 3
//                     0                     1                    2
//                  0        1          0         1          0        1
let cities = [["Nagpur","Wardha"],["Bhopal","Indore"],["Lucknow","Agra"]]
let [[c11,c22],[c33,c44],[c55,c66]] = cities
console.log(c33)
console.log(c66)


//Program 4
//Object do not store the value by index

let info = {
    firstName : "arina",
    lastName : "joshi"
}

let{firstName,lastName} = info
console.log(firstName)
console.log(lastName)


//Can do aliasing as well
let Vehicle = {
    color : "red",
    type : "sedane"
}
let{color:co,type : ty} = Vehicle
console.log(co)
console.log(ty)

//Program 4
let info2 = {
    fullName : "ram joshi",
    parent : {
        mother : "gita joshi",
        father : "hari joshi"
    }
}
let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)

//Program 5
let students = [
    {
        fn : "arina",
        ln : "joshi"
    },
    {
        fn : "jyoti",
        ln : "pradhan"
    }
]

let [{fn:f1,ln:l1},{fn:f2,ln:l2}] = students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

//Program 6
let info3 = {
    firstName : "arina",
    lastName : "joshi",
    skills : ["python","javascript"]
}
let {firstName : f3 ,lastName : l3,skills :[sub1,sub2]} = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)

/********************************************************* */

//Array Destructure : let [a1,a2,a3] = names
//Object Destructure : let {firstName,lastName} = info