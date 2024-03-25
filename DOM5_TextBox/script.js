let headOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonOne = document.querySelector('button')

console.log(headOne)
console.log(inputText)
console.log(buttonOne)


//Program 1
headOne.addEventListener('click',function(){
    headOne.style.color = "green"
})


//Program 2
// buttonOne.addEventListener('click',function(){
//     buttonOne.style.color = "red"
// })


//Program 3
buttonOne.addEventListener('click',function(){
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""

})

/******************************************************* */
/*
.style.color
.value

*/