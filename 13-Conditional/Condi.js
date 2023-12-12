// let string = "string"
// let number = 10
// let boolean = true


//Equality checks://
let number = 5;
let string = "5";     // these are quality check. 

console.log(number == string);   // Comparision operatiors. 

console.log(number === string);

// Tpye Coercion//
let value = 5;
let text = "The value is " + value; // --> "The value is 5"


let result = "4" - "2";  // --> 2

//Comparision operatiors. 
// let isNotEqual = "5" = !=5;  // False.   ! means NOT. reverse. 

let isStrictlyNotEqual = "5" !== 5; // True

// Logical Operatirs

// let andResult = true && false  // False.  are they both(And) true? NO. 

// let orResult = true || false; // True. Means is either(or) of them true? YES

// let noResult = !true; // False, says NOT true.

// let truthyValue = !!1 // true 1 is treated as boolean. !! converts everying there into Boolean. So here means NOT false --> Mean True. 

// let newValue = null ?? "default string";

let userSettings = {
    theme: null,
};

let currentTheme = userSettings.theme ?? 9;
console.log(currentTheme);


let isLoggedIn = true; 
let greeting = isLoggedIn ? "Welcome back!" : "Welcome, guest!";
console.log(greeting);


// let firstName = 'Adam';

// if(firstName) {
//     console.log("this ran");
// }

// if(userSettings.theme) {
//     console.log("this ran");
// }

// Switch Statements:

let day = new Date(). getDay(); //Sunday - Sat: 0-6// 

switch (day) {
    case 0:
        console.log("Sunday: Time to relax!");
    case 1:
        console.log("Monday: Time to relax!");
    case 2:
        console.log("Tuesday: Time to relax!");
    case 3:
        console.log("Wednesday: Time to relax!");
    case 4:
        console.log("Thursday: Time to relax!");
    case 5:
        console.log("Friday: Time to relax!");
    case 6:
        console.log("Saturday: Time to relax!");

}








