// Map and Set

//Difference between normal object and Map
//In normal object, Keys will always be String
//In Map, keys will be of different datatype. 

let info = {
    firstName : "arina",
    lastName : "joshi",
    age : 34,
    1 : 35
}

for (let key in info){
    console.log(key)
}

//Two ways of defining Map

// Method 1/ Program 1
let roles = new Map()
console.log(roles)

roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"employee")
console.log(roles)

console.log(roles.get(0))       //undefined
console.log(roles.get(1))      //admin
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))


// Mehod 2/ Program 2

let skills = ["python","javascript","html","css"]
let info2 = {'firstName' : "arina", lastName : "joshi"}
let canDrive = true

let names = new Map(
[
    [skills,4],
    [info2,2],
    [canDrive,"yes"],
    [3,"rollNo"],
    ["fullName", "arina joshi"]
]
)
console.log(names)
console.log(names.get(1))       //undefined
console.log(names.get(skills))


//Program 3
//has()
let x = names.has (info2)
console.log(x)

//Program 4
let roles2 = new Map(
    [
        [1,"admin"],
        [2,'manager'],
        [3,'customer'],
        [4,'employee']
    ]
)

//roles2.clear()
//console.log(roles2)      //Map(0) {}

roles2.forEach(function(val,key){
    console.log(val,key)
    console.log(typeof val, typeof key)
})


//set() - to set values in the blank map.
//get() - to retrieve the value(we have to pass keys in get())