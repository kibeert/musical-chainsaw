const cars =[ "volvo", "Audi", "Toyota"]
console.log(cars)
let car = cars[2]
console.log("The make of the car is: "+car); 
// Output: The make of the car is: Toyota
cars[0]="Ford"
console.log("After adding Ford to the list, the makes are now: " + cars)

const person = {
    'fname':'John',
    'lname':"Doe",
    'age':20
}
let fname = person.fname
let lname = person.lname
function calfulname(fname, lname){
    return fname +" "+  lname
}
console.log(person.fname)
console.log(calfulname(fname, lname))

const fruits= ["Banana", "Apple", "Mango", "Orange"]
console.log(fruits.join(" * "))
console.log(fruits)
console.log(fruits.toString(fruits))
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.push("mango"))
console.log(fruits)

//DATES
const d = new Date()
const de = Date()
console.log(d)
console.log(de)
const e = Date("year", "month")
console.log(e.toString())
const t = Date()
s = t.toString()
console.log(t)

//Date Formats
//1.ISO date eg = 2105-03-25
//2.Short date eg 

let msec = Date.parse("March 21 , 2012")
console.log(msec)
//Math functions
let f = (Math.random() * 100) + 1
console.log(f)

function getrnd(min, max){
    return Math.floor(Math.random() * (max-min) + min) 
}
let y = getrnd(1, 68)
console.log(y)
let x = true
console.log(x , typeof(x))