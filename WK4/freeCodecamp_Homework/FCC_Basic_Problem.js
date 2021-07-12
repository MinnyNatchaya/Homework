// 1.Profile Lookup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];



// function lookUpProfile(name, prop) {

//     for(let i = 0; i < contacts.length; i++){

//         if(contacts[i].firstName.includes(name)){

//             if(contacts[i][prop]){
//                 return contacts[i][prop];
                
//             }else{
//                 return "No such property";
                
//             }


//         }
    
//     }
//     return "No such contact";

// }
// console.log(lookUpProfile("Bob", "number"))




// 2.Generate Random Fractions with JavaScript
// function randomFraction() {
//     return Math.random();
//   }




// 3.Generate Random Whole Numbers with JavaScript
// function randomWholeNum() {
//     return Math.floor(Math.random() * 10);
//   }




// 4.Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//   }




// 5.Use the parseInt Function
// function convertToInteger(str) {
//     return parseInt(str)
// }

// convertToInteger("56");




// 6.Use the parseInt Function with a Radix
// function convertToInteger(str) {
//     return parseInt(str,2)
//   }
//   convertToInteger("10011");




//   7.Use the Conditional (Ternary) Operator
//   function checkEqual(a, b) {
//     return a === b ? "Equal" : "Not Equal";
//   }
//   checkEqual(1, 2);




//   8.Use Multiple Conditional (Ternary) Operators
// function checkSign(num) {
//     return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"; 
//   }
//   checkSign(10);




//   9.Use Recursion to Create a Countdown
// function countdown(n){

//     if(n<1){
//       return [];
//     }else{
//       let arr = countdown(n-1);
//       arr.unshift(n);
//       return arr;
//     }
    
//   }
// console.log(countdown(6))




// 10.Use Recursion to Create a Range of Numbers

// function rangeOfNumbers(startNum, endNum) {
//     if(endNum<startNum){
//       return [];
//     }else{
//       let arr = rangeOfNumbers(startNum,endNum-1);
//       arr.push(endNum);
//       return arr;
//     }
    
// };

//   console.log(countdown(2,6))