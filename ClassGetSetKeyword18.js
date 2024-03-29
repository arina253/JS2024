//Object literal - code repetition
//Program 1
let ram = {
    firstName : "ram",
    lastName : "dani",
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }

}

let sam = {
    firstName : "sam",
    lastName : "rao",
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }

}

//Program 2
//Class Template -------same property is assigned to each object
class Person {
    firstName = "arina"
    lastName = "joshi"
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amol = new Person()
let samu = new Person()
amol.firstName = "arina j"


//Program 3
//constructor-------setting the value of the variable at the time of object creation
class PersonD{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let ninad = new Person("ninad","dani")
let arina = new Person("arina","joshi")

//Program 4
//Get set method
class PersonE{
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
}

let arinaE = new PersonE()
arinaE.setFirstName = ("arinaE")
arinaE.setLastName("joshiE")

//Program 5
//set and get keyword
//set propertyname(value)

class PersonF{
    set fn(fn){
        this.firstName = fn
    }
    set ln(ln){
        this.lastName = ln
    }
    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }
}

let arinaF = new PersonF()
arinaF.fn = "arinaF"
arinaF.ln = "joshiF" 
console.log(arinaF)






