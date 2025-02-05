"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual; 

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/******************IF********* */
// TINA --> There is no alternative!
// entweder JA oder nix.. alternativlos

// if(isJohnOlder) // insert condition here()
// {
//     console.log("John ist älter.");
// }

/*************IF -else**** */
// mit Alternative
// entweder ja oder nein

// if (isJohnOlder) 
// {
//     //Ja-Zweig / true
//     console.log("John ist älter.");
// } 
// else 
// {
//     // Nein-Zweig / false
//     console.log("John ist jünger.");
// }


/************  Ternäre (ternary) Schreibweise ************/
// /console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************************IF - ELSE IF****** */
// mit alternativen Fällen (älter, jünger, gleich)

// if (isJohnOlder) 
// {
//     console.log("John ist älter.");
// } 
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt.");
// }
// // evt. weitere Alternative(n) else if(){}
// // gemeinsame Alternative
// else 
// {
//     console.log("John ist jünger.");
// }


/** Fallunterscheidung / SWITCH CASE */

// const firstName = "Jane";
// let job;

// job = "driver";     // .. fährt TAXI! / UBER
// job = "diver";      // .. taucht im Rhein!
// job = "artist";     // .. malt ein Bild!
// job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!


// switch (job) {
//     case "driver":
//         console.log(firstName + " .. fährt TAXI!");
//         break;
    
//     case "diver":
//         console.log(firstName + " taucht im Rhein!");
//         break;

//     case "artist":
//         console.log(firstName + " malt ein Bild!!");
//         break;

//     //case "pilot":
//       //  console.log(firstName + " macht etwas anderes!");

//     case "teacher":
//     case "instructor":
//         console.log(firstName + " unterrichtet!");
//         break;


//     default:
//         console.log(firstName + " macht etwas anderes");
//         break;
// }

/********  Fallunterscheidung / SWITCH|CASE 2 *******/


const cond = false;
const a = 1;


switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}





