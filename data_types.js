//Scope bindings:var, let, const
//var in action
console.log(`Understanding var`);
var name; // variable declaration
name = `Chris Otta`; // variable assignment of type `String´
console.log(name);
var name = `Fleria Kate`;
console.log(name);

//let in action
console.log(`Understanding let`);
let fruit = `Mango`;
console.log(fruit);
fruit = `Pinneapple`;
//Expect an exception to be thrown
console.log(fruit);
fruit = `Pawpaw`;
console.log(fruit);

//Const in action
//const PI = 3.142;
//console.log(PI);
//Error or warrning upon reassignment of constant
//Understanding object in js
let person = {
    name: 'Ronnie Kabala',
    email: 'Kabalaromi@gmail.com',
    gender: 'Male',
    occupation: 'Student Software Engineer'
};
//Reference a value in Key-value pair in person object
let jina = person.name;
console.log('My name is ' + jina + ' and I am a ' + person.occupation);
//expressions evaluate to value