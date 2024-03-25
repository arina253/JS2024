let students = [
    {
        firstName: "arina",
        lastName: "joshi",
        age: 30,
        skills: ["python", "javascript", "django"],
        city: "kathmandu"
    },
    {
        firstName: "sachin",
        lastName: "shrestha",
        age: 45,
        skills: ["python", "javascript", "cypress"],
        city: "usa"
    },
    {
        firstName: "sony",
        lastName: "baidya",
        age: 35,
        skills: ["python", "html", "cypress"],
        city: "bhaktapur"
    },
    {
        firstName: "roshini",
        lastName: "amatya",
        age: 42,
        skills: ["testing", "html", "cypress"],
        city: "bhaktapur"
    }
]


//firstName of all the students
for (let i = 0; i < students.length; i++){
    console.log(students[i].firstName)
}

students.forEach(function(el){
    console.log(el.firstName)
    console.log(el['firstName'])

})


//student with bhaktapur city
for (let i = 0; i < students.length; i++){
    if (students[i].city == "bhaktapur"){
        console.log(students[i].firstName)
    }
}


students.forEach(function(el){
    if (el.city == "bhaktapur"){
        console.log(el.firstName)
    }
})


let r1 = students.filter(function(el){
    return el.city == "bhaktapur"
})
console.log(r1)
r1.forEach(function(el){
    console.log(el.firstName)
})


students.filter(function(el){
    return el.city == "bhaktapur"
}).forEach(function(el){
    console.log(el.firstName)
})


//students in usa and age above 40
students.forEach(function(el){
    if(el.city == "usa" && el.age > 40){
        console.log(el.firstName)
    }
})



//add css skill to every student
students.forEach(function(el){
    el.skills.push("css")
    console.log(el.skills)
}) 

let r2 = students.map(function(el){
    el.skills.push("html5")
    return el
})
console.log(r2)


//Print name : number of skills
students.forEach(function(el){
    console.log(el.firstName + " : " + el.skills.length)
})


//Average age f all the students

let total = 0
for(let i = 0; i < students.length; i++){
    total = total + students[i].age
}
console.log(total / students.length)

let q2 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(q2/students.length)
