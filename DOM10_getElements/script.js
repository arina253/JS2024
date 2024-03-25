//Use of JS

//<h1 id = "one" class = "two" name = "nm"> Heading </h2>

//we can retrieve the element 
//we can create the element
//we can update the element 
//we can delete the element

// user action
//element attribute update
//element attribute retrive
//element attribute add
//element attribute delete

/*<h1  id= "one"> HeadOne </h1>
        <h2 class = "two"> HeadTwo</h2>
        <ul>
            <li class = "fruits" name = "nm">Apple</li>
            <li class = "fruits" name = "nm">Banana</li>
            <li class = "fruits" name = "nm">Mango</li>
            <li class = "fruits" name = "nm">Grapes</li>
            <li class = "fruits" name = "nm">Chikoo</li>
        </ul>*/

//Program 1
let tagName = document.querySelector("h1")
let idName = document.querySelector("#one")  
let idName2 = document.getElementById('one')  
console.log(idName)
console.log(idName2) 

//Program 2
let liLists = document.querySelectorAll ('li')
console.log(liLists)
let liLists2 = document.getElementsByTagName('li')
console.log(liLists2)

//Program 3
let className = document.querySelectorAll('.fruits')
console.log(className)
let className2 = document.getElementsByClassName('fruits')      // No need to put .
console.log(className2)


//Program 4
let byAttr = document.querySelectorAll('li[nam = "nm"]')
console.log(byAttr)
let byAttr2 = document.getElementsByName('nm')
console.log(byAttr2)

/*
document.querySelector() -------Return type: html element
document.querySelectorAll() ----Return type : NodeList

document.getElementById() -------Return type: html element
document.getElementsByTagName------ Return type : HTML collection
document.getElementsByClassName---- Return type: HTML collection
document.getElementsByName('nm')---Return type:NodeList

**No need to write '#' and '.' in document.getElements

*/