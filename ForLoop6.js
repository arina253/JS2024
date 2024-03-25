//Loops - to repeat the same action multiple times.
// for loop and while loop

//for loop
//for (initialization; conditionCheck; increment/decrement){
    //statements
//}

//Program 1
//Print 1 to 3

for (let i = 1; i <= 3; i++){
    console.log(i)  //1,2,3
}

//1 <= 3 ? true
//2 <= 3 ? true
//3 <= 3 ? true

//Program 2
//Print 1 to 5

for (let i = 1; i <= 5; i ++){
    console.log(i)
}

//Program 3
//Print 5 to 1

for (let i = 5; i >= 1; i --){
    console.log(i)
}

//Program 4
//Print table of 2

for (let i = 2; i <= 20; i = i+2){
    console.log(i)
}

//Program 5
//Table of 2

for (let i = 1; i <= 10; i++){
    console.log(i * 2)
}

//Program 6
//Table of 5 in reverse

for (let i = 50; i >= 5; i = i - 5){
    console.log(i)
}

//Program 7
//Table of 3 in reverse

for(let i = 30; i >= 3; i = i - 3){
    console.log(i)
}

//for loop with break statement

//Program 1
for (let i = 1; i <= 5; i++){
    console.log(i)    //1 //2 //3
    if (i == 3){
        break
    }
}

//Program 2
for ( let i = 5; i >= 1; i--){
    if (i == 3){
        break
    }
    console.log(i)  //5 //4
}

//Program 3
for (let i = 2; i <= 20; i = i + 2){
    if (i == 10){
        break
    }
    console.log(i)  //2 //4 //6 //8
}

// continue statement with for loop

//Program 4
for (let i = 1; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)  //1 //2 //4 //5
}

//Program 5
for (let i = 5; i >= 1; i--){
    if (i == 3){
        continue
    }
    console.log(i) //5 //4 //2 //1
}

//break will terminate the loop if the condition matches and is used inside switch or loop.
//continue will skip the current iteration and continue with next.It can be used only inside the loop .
