let first_name = "chandrapur"
console.log(first_name)

//slice()

// 0    1   2   3   4   5   6   7   8   9
// c    h   a   n   d   r   a   p   u   r
//-10  -9  -8  -7  -6  -5  -4  -3  -2  -1

let q1 = first_name.slice(2)
let q2 = first_name.slice(2,8)
console.log(q1)

console.log(first_name.slice(2,8))    //andrap
console.log(first_name.slice(-8))    //andrapur
console.log(first_name.slice(1,-1)) //handrapu
console.log(first_name.slice(-7,8)) //ndrap
console.log(first_name.slice(-1,-3))//end index come first, so blank string

//Program 2
//concat()
let last_name = "joshi"
let fullName = last_name.concat(" ").concat("arina")
console.log(fullName)

//Program 3
//split() ----- string converted to array
let full_name = "arina joshi 9803753479"
let info = full_name.split(" ")
console.log(info)                           //[ 'arina', 'joshi', '9803753479' ]
console.log(full_name.split("a"))          //[ '', 'rin', ' joshi 9803753479' ]

//Program 4
//indexOf
let city2 = "hyderabad"
let e2 = city2.indexOf('d')
console.log(e2)

//lastIndexOf()
let e4 = city2.lastIndexOf('a')
console.log(e4)

//Program 5
//replace()
let info3 = "I am learning js"
let e5 = info3.replace('js',"python")
console.log(e5)

//repeat()
let e6 = info3.repeat(3)
console.log(e6)


//Program 5
//charAt()
let city10 = "wardha"

// 0    1   2   3   4   5
// w    a   r   d   h   a

console.log(city10.charAt(2))

//charCodeAt()----- give ASCII code of character
console.log(city10.charCodeAt(2))     //114

//Progrm 6
//substring()
let info2 = "I am learning javascript"
console.log(info2.substring(2,8))       // end index is not included
console.log(info2.substring(2,88))

//There is no negative indexing in substring.