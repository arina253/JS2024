
//ARRAY

let namess = ["arina","jyoti","sony","sachin"]

//Retrieve
console.log(namess[0])

//Update
namess[0] = "sriman"
console.log(namess)

//Add
namess.push("sri")
namess.unshift("sri")
console.log(namess)

//Delete
namess.pop()
namess.shift()

console.log(namess)

for (let i = 0; i < namess.length; i++){
    console.log(namess[i])
}

//OBJECT
//properties and methods
//Object does not store the value by index
//Object is descriptive in nature- can store in key value pair


//Program 1

//            0        1    2  3
let info = ["arina","joshi",38,65]


let arina = {
    //key:values
    //property:values
    firstName : "arina",
    lastName : "joshi",
    age : 38,
    rollNo : 65
}
console.log(arina)

//Retrieve (dot notation and bracket notation)
console.log(arina.firstName)
console.log(arina['firstName'])

//Update (dot notation and bracket notation)
arina.lastName = "shrestha"
arina['lastName'] = "josh"
console.log(arina)

//Add
arina['language'] = "newari"
arina.city = "kathmandu"
console.log(arina)

//Delete
delete arina.firstName
delete arina['lastName']

console.log(arina)

//Program 2
vehicle = {
    color : "red",
    type : "sedane"
}

//CRUD-----dot notation
vehicle.regNo = 123
console.log(vehicle.color)
vehicle.color = "blue"
console.log(vehicle)
delete vehicle.type
console.log(vehicle)


//CRUD ------ bracket notation
vehicle['regNo'] = 345
console.log(vehicle['color'])
vehicle['color'] = "orange"
console.log(vehicle)
delete vehicle['regNo']
console.log(vehicle)

for (let key in vehicle){
    console.log(key,vehicle[key])
}


//Program 3
let names = ["arina","sachin","sriman","jyoti"]
for(let i = 0; i < names.length; i ++){
    //console.log(i)
    console.log(names[i])
}


for (let i = names.length -1; i > -1; i --){
    //console.log(i)
    console.log(names[i])
}


//Program 4
let ninad = {
    //property: values
    firstName : "ninad",
    lastName : "dani",
    age : 34,
    rollNo : 45
}
console.log(ninad['firstName'])

for(let prop in ninad){
    console.log(prop,ninad[prop])
}


let ninad2 = {
    //property: values
    firstName : "ninad",
    lastName : "dani",
    age : 34,
    rollNo : 45
}

for(let x in ninad2){
    console.log(x,ninad2[x])
}


//Program 5
let students = [
    {
        firstName : "arina",
        lastName : "joshi",
        age : 38

    },
    {
        firstName : "sachin",
        lastName : "joshi",
        age : 45

    },
    {
        firstName : "bina",
        lastName : "rai",
        age : 54

    }
]

console.log(students[2].firstName)