
let amol = {
    firstName : "amol",
    lastName : "rao",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol.firstName)
console.log(amol.lastName)
amol.displayName()

//function constructor

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    //this.displayName = function(){
    //    console.log(this.firstName + this.lastName)
    }
//}

let amol2 = new Person ("amol2","rao2")
let arina2 = new Person("arina2","joshi2")
console.log(amol2)
console.log(arina2)

// Every object has __proto__ === Parent.prototype

console.log(amol2.__proto__ === Person.prototype)
console.log(arina2.__proto__ === Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.city = "Palpa"

amol2.displayName()
arina2.displayName()

console.log(amol2 instanceof Person)
console.log(arina2 instanceof Person)

console.log(amol2.hasOwnProperty('firstName'))
console.log(amol2.hasOwnProperty('lastName'))

console.log(amol2.city)
console.log(arina2.city)

// Program
let names = ["arina","sachin"]
console.log(names)
console.log(names.__proto__ === Array.prototype)
names.pop()


//Es6 class

class PersonC{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let shirish = new Person("shirish","shrestha")
let roshini = new Person("roshini","amatya")
console.log(shirish)
console.log(roshini)
shirish.displayName()
roshini.displayName()

//Object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let arinaE = Object.create(info)
console.log(arinaE)
arinaE.init("arinaE","joshiE")
arinaE.displayName()