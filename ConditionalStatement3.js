//one input and multiple outcome

//if (condition){
    //statement
//}

//music concert
//numT > 0 && numT <= 5 ------10% discount
//numT > 5 && numT <= 10 -----20% discount
//numT > 10              -----30% discount

//Program 1
let numT = 17

if (numT > 0 && numT <= 5){
    console.log("10% discount")
}
if (numT > 5 && numT <= 10){
    console.log("20% discount")
}
if (numT > 10){
    console.log("30% discount")
}

//Program 2
let numT2 = -50

if (numT2 > 0 && numT2 <= 5){
    console.log("10% discount")
}
else if (numT2 > 5 && numT2 <= 10){
    console.log("20% discount")
}
else if (numT2 > 10){
    console.log("30% discount")
}
else{
    console.log("Incorrect input")
}

//Program 3
let marks = 90

// if (marks > 90){
//     console.log("Grade A")
// }
// if (marks >= 75){
//     console.log("Grade B")
// }
// if(marks >= 65){
//     console.log("Grade C")
// }

//Program 4
if (marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if (marks >= 65){
    console.log("Grade C")
}
else{
    console.log("Please try again")
}

//Program 5
let a = 50
let b = 90

if (a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

//Program 6
let x1 = 10
let x2 = 50
let x3 = 300

if (x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if (x2 > x3 && x2 > x1){
    console.log("x2 is greater")
}
else{
    console.log("x3 is greater")
}
