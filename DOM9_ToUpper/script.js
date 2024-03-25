let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')
let liList = document.querySelector('li')

console.log(liList)
let nodeListLi = document.querySelectorAll('li')
console.log(nodeListLi)

buttonA.addEventListener('click',function(){
    ulList.style.color = "red"
})

//To make even number list red and odd number list green

for (let i = 0; i < nodeListLi.length; i++){
    //console.log(nodeListLi[i].textContent)
    if (i % 2 == 0){
        nodeListLi[i].style.color = "red"
        nodeListLi[i].textContent = nodeListLi[i].textContent.toUpperCase()
    }
    else{
        nodeListLi[i].style.color = "green"
        nodeListLi[i].textContent = nodeListLi[i].textContent.toUpperCase()

    }
}

let info = {
    "firstName" : "arina",
    "lastName" : "joshi"
}

/*************************************************************************************/

 /*
 document.querySelector() - return first element.
 document.querySelectorAll() - return all the elements similar to array and that is called nodeList
 textContent - property to retrieve element or get the text of any html element.
 toUpperCase()
 */