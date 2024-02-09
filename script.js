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