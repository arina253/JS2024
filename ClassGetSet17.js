
//Object literal

let arina = {
    firstName : "arina",
    lastName : "joshi",
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = {
    firstName : "amol",
    lastName : "rao",
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }

}

//Program 1

class Person{
    firstName = "arina"
    lastName = "joshi"

    dispayName(){
        console.log(this.firstName + this.lastName)
    }
}
let arinaE = new Person()
console.log(arinaE)
let amolE = new Person()
amolE.firstName = "amolE"
amolE.lastName = "raoE"

//Program 2
class PersonB{
    constructor (fn,ln){
    this.firstName = fn
    this.lastName = ln
}
displayName(){
    console.log(this.firstName + this.lastName)
}
}
let arinaB = new PersonB("arinaB","joshiB")
let amolB = new PersonB ("amolB", "raoB")
arinaB.displayName()
amolB.displayName()

//Program 3
//Get and Set method

class PersonC{
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let arinaC = new PersonC
console.log(arinaC)
arinaC.setFirstName("arinaC")
arinaC.setLastName("joshiC")
let a = arinaC.getFirstName()
let b = arinaC.getLastName()
console.log(a)
console.log(b)

let jyotiC= new PersonC()
jyotiC.setFirstName("jyotiC")
jyotiC.setLastName("pradhanC")
console.log(jyotiC)