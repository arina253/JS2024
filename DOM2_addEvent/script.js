//<h1 id = "one" class = "two" name = "nm">hello</h1>

//Selecting element by different ways

//tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)

//id
let byId = document.querySelector("#one")   // # for id
console.log(byId)

//class
let byClass = document.querySelector (".two")
console.log(byClass)

//attribute
//tagName[attribute = "value"]
let byAttribute = document.querySelector('h1[id="one"]')
console.log(byAttribute)
console.log(byAttribute.textContent)    //hello


// Changing the text "hello" to "bye"

byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "bye"
    byAttribute.style.color = "red"
    byAttribute.style.backgroundColor = "green"
})

// Changing the text to uppercase letter

document.querySelector('h1').addEventListener('click',function(){
    let textUpper = document.querySelector('h1').textContent.toUpperCase();
    console.log(textUpper)
})


//***************************************************************************//


let info = {
    firstName : "arina",
    lastName : "joshi"
}
info.firstName = "jyoti"
console.log(info.firstName)


let info1 = {
    fullName : "marina josh",
    parent:{
        mother: "sarina josh",
        father: "hari josh"
    }
}

    console.log(info1.parent.father)
    info1.parent.father = "mohan josh"
    console.log(info1)


//******************************************************************** */    

/*
document.querySelector()
byAttribute.addEventListener('click',function(){})
byAttribute.textContent
byAttribute.style.color
byAttribute.style.backgroundColor
byAttribute.textContent.toUppercase() 
*/