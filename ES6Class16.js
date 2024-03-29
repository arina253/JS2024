// Object literal

let arina = {
    firstName : "arina",
    lastName : "joshi",
    age : 35,
    rollNo : 34
}

let amol = {
    firstName : "amol",
    lastName : " rao",
    age : 32,
    rollNo : 21
}

//100 objects -------400 lines

//Es6 class
class Person{
    firstName = "arina"
    lastName = "joshi"
    age = 35
    rollNo = 34

displayName(){
    console.log(this.firstName + this.lastName)
}
}

let arinaA = new Person()
let amolA = new Person()

console.log(arinaA.firstName)
console.log(arinaA.lastName)
console.log(arinaA.age)
console.log(arinaA.rollNo)
arinaA.displayName()
console.log(arinaA)
console.log(typeof arinaA)

amolA.firstName = "amol"
amolA.lastName = "rao"
amolA.age = 34
amolA.rollNo = 32
console.log(amolA)


//Program 3
//Es6 class with constructor

class PersonC{
    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln
        this.rollNo = rollNo
        this.age = age
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

    let arinaC = new PersonC("arinaC","joshiC",35,34)
    let amolC = new PersonC ("amolC","raoC",34,21)
    arinaC.city = "kathmandu"
    console.log(arinaC)
    console.log(amolC)


    // for (let key in amolC){
    //     console.log(key,amolC[key])
    // }

    // for (let key in Object.keys(amolC)){
    //     console.log(key)
    // }

    // for (let val in Object.values(amolC)){
    //     console.log(val)
    // }

    // for (let[k,v] in Object.entries(amolC)){
    //     console.log(k,v)
    // }

