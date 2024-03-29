//Overloading

//Conventional Overloading is not possible in Javascript.
/*class Calculator{
    addition(x,y){
        console.log(x+y)
    }
    addition(x,y,z){
        console.log(x+y+z)
    }
    addition(x,y,z,a){
        console.log(x+y+z+a)
    }
}

a=new Calculator()
a.addition(5,10)          //Number + Undefined = NaN(Not a number)
a.addition(5,10,15)      //Number + Undefined = NaN(Not a number)
a.addition(5,10,15,20)  //50
*/

class Calculator{
    addition(x,y,z,a){
        if(x != undefined && y != undefined && z != undefined && a != undefined){
            console.log(x+y+z+a)
        }
        else if (x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        }
        else if (x != undefined && y != undefined){
            console.log(x+y)
        }
    }
}

a = new Calculator()
a.addition(5,10)
a.addition(5,10,15)
a.addition(5,10,15,4)


//Method Overriding
//different class,same method name,same signature

class WorldBank{
    save(){
        console.log("I am save method from worldbank")
    }
    loan(){
        console.log("I am loan method from world bank")
    }
}

class SBI extends WorldBank{
    save(){
        console.log("I am save method from SBI")
    }
    loan(){
        console.log("I am loan method from SBI")
    }

}

class PNB extends WorldBank{
    save(){
        console.log("I am save mehtod from PNB")
    }
    loan(){
        console.log("I am loan method from PNB")
    }

}

let hyderabad = new SBI()
hyderabad.save()
hyderabad.loan()

let bangalore = new PNB()
bangalore.save()
bangalore.loan()
