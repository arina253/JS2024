//Arrays

//              0       1           2       3
let names = ["arina", "jyoyi", "roshini", "rupa"]
console.log(names[0])
console.log(names[1])

//Array stores the value by index
console.log(names[2])

//Length of array
//Program 1
let q1 = names.length
console.log(q1)

for (let i = 0 ; i < names.length ; i++){
    console.log(i)
    console.log(names[i])
}

//Program 2

let animals = ["tiger","lion","cat","dog"]
console.log(animals[0])
console.log(animals.length)
for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

// i - 0
// i - 1
// i - 2
// i - 3

//Program 3

let fruits = ["mango","apple","banana", "chikoo"]
console.log(fruits[0])
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//Program 4
//Print the element in reverse
//length-1 is always last index

for (let i = fruits.length-1; i >= 0; i--){
 //console.log(i)
 console.log(fruits[i])
}

//Program 5
//Print upto "cat"

let animalss = ["tiger", "lion", "cat", "monkey", "rabbit"]
for (let i = 0 ; i < animalss.length ; i++){
    //console.log(animalss[i])
    if (animalss[i] == "monkey"){
        break
    }
    console.log(animalss[i])
}

//Program 6
//Skip jasmine and print all other flowerss

let flowerss = ["rose", "lily", "jasmine","tulip"]

for (let i = 0 ; i < flowerss.length ; i ++){
    if (flowerss[i] == "jasmine"){
          continue
    }
    console.log(flowerss[i])
}

//Program 7
//while loop

let country = ["Nepal", "India", "USA", "Japan", "China"]
console.log(country)

let y = 0
while (y  < country.length){
    console.log(country[y])
    y++
}