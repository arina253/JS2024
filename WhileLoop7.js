// while loop
//initialization
//while(condition){
    //statements
    //increment/decrement
//}


//Program 1

let i1 = 1
while(i1 <= 3){
    console.log("hello")
    i1 = i1 + 1 
}

//Program 2 : Print 1 to 3
let i2 = 1
while( i2 <= 3){
    console.log(i2)
    i2 = i2 +1
}

//Program 3 : Print 1 to 5
i3 = 1
while (i3 <= 5){
    console.log(i3)
    i3 = i3 +1
}

//Program 4 : Print 5 to 1
i4 = 5
while (i4 >= 1){
    console.log(i4)
    i4--
    //i4-1
    //i4 -=i4
}

//Program 5 : Print table of 2
i5 = 2
while(i5 <= 20){
    console.log(i5)
    i5 = i5 +2
}

//Program 7 : Print table of 5 in reverse
let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6-5
}

//Program 8 :  Print table of 3
let i7 = 30
while (i7 >= 3){
    console.log(i7)
    i7 = i7 - 3
} 

//while with break statement
//Program 9
let i8 = 1
while (i8 <= 5){
    if(i8 == 3){
        break
    }
    console.log(i8)
    i8++
}


//Program 10
let i9 = 1
while (i9 <= 5){
    console.log(i9)
    if (i9 == 3){
        break
    }
    i9 = i9 +1
    }

//continue with while loop
let i10 = 1
while (i10 <= 5){
    if(i10 == 3){
        i10 = i10+1
        continue
    }
    console.log(i10)
    i10 = i10 +1
}    


