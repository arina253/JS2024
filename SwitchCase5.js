//Program 1
//switch case without break statement
//
// let city = "Pune"
// switch(city){
//     case "Pune":
//         console.log("MH")
//     case "Jaipur":
//         console.log("RJ")
//     case "Bhopal":
//         console.log("MP")
//     default:
//         console.log("Incorrect city")
// }


//Program 2
//switch case with break statement
let city = "Pune"
switch (city){
    case "Pune":
        console.log("MH")
        break
    case "Jaipur":
        console.log("RJ")
        break
    case "Bhopal":
        console.log("MP")
        break
     default:
        console.log("Incorrect city")       
}

//Program 3
let cityA = "Bhopal"
switch (cityA){
    case "Pune":
    case "Nagpur":
            console.log("MH")
            break
    case "Jaipur":
    case "Udaipur":
            console.log("RJ")
            break
    case "Bhopal":
    case "Indore":
             console.log("MP")
            break
         default:
            console.log("Incorrect city")

}

//Program 4
let x1 = 10
let x2 = 5
let x3 =2
let isGreatest = true
switch(isGreatest){
    case x1 > x2 && x2 > x3:
        console.log("x1 is greater")
        break
    case x2 > x3 && x2 > x1:
        console.log("x2 is greater")    
        break
    default:
        console.log("x3 is greater")   
}
