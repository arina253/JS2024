let arina = {
    firstName : "arina",
    lastName : "joshi",
    displayName : function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(arina.firstName)
console.log(arina.lastName)
arina.displayName()

//Program 2

/*function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}

let arinaA = new Person("arina", " joshi")
let sachin = new Person("sachin","shrestha")
console.log(arinaA)
console.log(sachin)
arinaA.displayName()
sachin.displayName()*/

//To separate a common method(displayName) that is attached to each object,the solution is Prototype Inheritance.

//Program 3
function Person(fn,ln){
    this.firstName = fn
    this.lastName = ln
}

let arinaA = new Person("arina", " joshi")
let sachin = new Person("sachin","shrestha")
console.log(arinaA)
console.log(sachin)

//Every object has one property __proto__ === Parent.prototype

console.log(arinaA. __proto__ === Person.prototype)
console.log(sachin. __proto__ === Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

arinaA.displayName()
sachin.displayName()

Person.prototype.country = " Nepal"

//Program 4
let names = ["arina","sachin","jyoti"]
console.log(names)
names.pop()
console.log(names.__proto__ === Array.prototype)

/*Array.prototype.chinmay = function(){
    console.log("hello chinmay")
}
names.chinmay()*/


//instanceof
console.log(names instanceof Array)
console.log(arinaA instanceof Person)
console.log(sachin instanceof Person)


//hasOwnProperty()

let q = arinaA.hasOwnProperty("firstName")
let r = arinaA.hasOwnProperty("lastName")
let s = arinaA.hasOwnProperty("country")

console.log(q)
console.log(r)
console.log(s)