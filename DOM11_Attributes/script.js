
//<h1 id = "one" class = "two three four ">Heading</h1>

let headOne = document.querySelector('h1')
console.log(headOne)
let buttonA = document.querySelector('button')
console.log(buttonA)

//class attribute
console.log(headOne.className)    //two three four 

//headOne.className = "five"
headOne.classList.add('seven')
console.log(headOne.className)      //two three four seven

headOne.classList.remove("two")
console.log(headOne.className)     //three four seven

headOne.classList.toggle("three")
console.log(headOne.className)     //four seven

headOne.classList.toggle("three")
console.log(headOne.className)    //four seven three


//retrieve 
let a1 = headOne.getAttribute('id')
console.log(a1)

let a2 = headOne.getAttribute('class')
console.log(a2)

headOne.setAttribute ('id','nine')
headOne.setAttribute("data-cy","cypress")

headOne.removeAttribute('id')

//With the help of JS,
//We can create,retrieve,update and delete element.
//We can add,retrieve,update and delete element attribute.

buttonA.addEventListener('click',function(){
   headOne.classList.toggle('green')
   headOne.classList.toggle('red')
})


/******************************************************************
 * document.querySelector('tagName')
 * .getAttribute('id')
 * .getAttribute(.class)
  
 * .setAttribute('id', 'X'),
 * .setAttribute('data-cy','js')
 * .removeAttribute('id')
 
 * .classList.add('x')
 * .classList.remove('x')
 * .classList.toggle('y')
*/