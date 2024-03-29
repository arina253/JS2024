//Inheritance

//Single level Inheritance
//Program 1
class Student{
    firstName = "arina"
    lastName = "joshi"

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student{
    salary = 100000
    displaySalary(){
        console.log(this.salary)
    }
}
arinaT = new Teacher()
console.log(arinaT.firstName)
console.log(arinaT.lastName)
console.log(arinaT.salary)
arinaT.displayName()
arinaT.displaySalary()


//Single level Inheritance with parent constructor
//Program 2 
class Studentt{
    constructor (fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacherr extends Studentt{
    salary = 100000
    displaySalary(){
        console.log(this.salary)
    }
}

let arinaTT = new Teacherr ("arinaTT","joshiTT")
console.log(arinaTT.firstName)
console.log(arinaTT.lastName)
console.log(arinaTT.salary)
arinaTT.displayName()
arinaTT.displaySalary()


//Single level Inheritance with constructor on both parent and child
//Program 3

class StudentB{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherB extends StudentB{
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}

let arinaB = new TeacherB("arinaB","joshiB",90000)
console.log(arinaB.firstName)
console.log(arinaB.lastName)
console.log(arinaB.salary)
arinaB.displayName()
arinaB.displaySalary()


//Multi level Inheritance
//Program 4
class StudentC{
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherC extends StudentC{
    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }
    displaySalary(){
        console.log(this.salary)
    }
}

class Professor extends TeacherC{
    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }
    displaySpecialization(){
        console.log(this.specialization)
    }
}

let prof = new Professor("arinaP","joshiP",80000,"micro")
console.log(prof.firstName)
console.log(prof.lastName)
console.log(prof.salary)
console.log(prof.specialization)
prof.displayName()
prof.displaySalary()
prof.displaySpecialization()
