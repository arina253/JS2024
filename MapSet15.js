//Map
//Two ways of defining map.
let roles = new Map()
let roles2 = new Map([        //multidimensional array is passed to constructor
    [1,"admin"],
    [2,"manager"],
    [3,"customer"]
])

console.log(roles)         //Map(0) {}
console.log(roles2)       //Map(3) { 1 => 'admin', 2 => 'manager', 3 => 'customer' }

//Program 2
let q1 = roles2.size
console.log(q1)

//set()
roles2.set(4,"support")
console.log(roles2)

//get()
let q2 = roles2.get(3)
console.log(q2)

//has()
let q3 = roles2.has(3)
console.log(q3)

//clear()
//roles2.clear()
//console.log(roles2)    //Map(0) {}

//delete()
roles2.delete(1)
console.log(roles2)

//forEach()
roles2.forEach(function(v,k){
console.log(v,k)
})

//key()
for (let key of roles2.keys()){
    console.log(key)
}

//values()
for(let val of roles2.values()){
    console.log(val)
}

//entries()
for(let[k,v] of roles2.entries()){
    console.log(k,v)
}

//update value
roles2.set (2,"newValue")
console.log(roles2)

//Array
let names = ["arina","jyoti","sony","amol"]
console.log(names)

//SET
//Do not allow duplicates
//Defining Set without elements
let names2 = new Set()
console.log(names2)

//Defining Set with elements
let names3 = new Set(["arina","jyoti","sony","amol"])
console.log(names3)

//add()
names3.add("sachin")
console.log(names3)

//has()
let m1 = names3.has("arina")
console.log(m1)

//delete()
names3.delete("arina")
console.log(names3)

//forEach()
names3.forEach(function(el){
    console.log(el)
})