

let ulList = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')

let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    ulList.appendChild(newLi)
    inputText.value = " "
})


/****************************************************************************************/ 
/*
.value
.textContent
.querySelector()
.addEventListener()
.createElement()
.appendChild()
*/
