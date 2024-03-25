// <h2 id="four" class="five">Arina</h2>

//Searching element by different ways

//by tagName

let q1 = document.querySelector('h2')
console.log(q1)

//by id
let q2 = document.querySelector('#four')
console.log(q2)

//by class
let q3 = document.querySelector(".five")
console.log(q3)

//byAttribute
//tagName[attribute = "value"]

let q4 = document.querySelector('h2[id="four')
console.log(q4)