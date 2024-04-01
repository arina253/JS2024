//Object literal

let arina = {
    firstName : 'arina',
    lastName : 'joshi',
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(arina.firstName)
console.log(arina.lastName)
arina.displayName()

let sachin = {
    firstName : 'sachin',
    lastName : 'shrestha',
    displayName: function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(sachin.firstName)
console.log(sachin.lastName)
sachin.displayName()

//Program2
//function constructor

function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}

let jyoti = new Person("jyoti", "pradhan")
console.log(jyoti)
jyoti.displayName()


function Vehicle(color,type){
    this.color = color
    this.type = type
    this.displayColor = function(){
        console.log(this.color)
    }
}
let audi = new Vehicle("blue","sedane")
let toyota = new Vehicle("red", "Camry")

console.log(audi)
console.log(toyota)
toyota.displayColor()


//Program 3
//Es6

class PersonC{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
    
}

class VehicleC {
    constructor(color,type){
        this.color = color
        this.type = type
    }
    displayColor(){
        console.log(this.color)
    }
}

    let audiB = new Vehicle("blue", "sedane")
    let arinaB = new Person ("arinaB", "joshiB")


// Program 4
// Object.create()

let audiC = Object.create({})    // we have to pass object in Object.create()
console.log(audiC)     // {}
audiC.color = "red"
audiC.type = "sedane"
audiC.displayColor = function(){
    console.log(this.color)
}
console.log(audiC)
