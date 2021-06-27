//////-------------Function1-------------///////


//////Basic///////
// 1.Write Reusable JavaScript with Functions
// function reusableFunction(){
//     return console.log("Hi World");
//   }
  
//   reusableFunction();


// 2.Passing Values to Functions with Arguments
// function functionWithArgs(num1, num2) {
//     console.log(num1+num2);
//   }
  
//   functionWithArgs(1,2);




///////Scope///////
// 1.Global Scope and FunctionsPassed

// var myGlobal =10;
// var oopsGlobal;
// function fun1() {
  
//   oopsGlobal = 5;
// }


// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }



// 2.Local Scope and FunctionsPassed
// function myLocalScope() {

//     var myVar; 
  
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
  
//   console.log('outside myLocalScope', myVar);




// 3.Global vs. Local Scope in FunctionsPassed
// var outerWear = "T-Shirt";

// function myOutfit() {
//   var outerWear = "sweater";
//   return outerWear;
// }

// myOutfit();





//////Return////////
// 1.Return a Value from a Function with Return
// function timesFive (num){
//     return num * 5;
//   }
//   var answer = timesFive(5);



// 2.Understanding Undefined Value returned from a FunctionPassed
// var sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// function addFive () {
//   sum = sum + 5;
// }

// addThree();
// addFive();




// 3.Assignment with a Returned Value
// Setup
// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// processed = processArg(7);


//////Application//////
// 1.Stand in Line (ใช้ความรู้เรื่อง Array)

// function nextInLine(arr, item) {

//     arr.push(item);
//     return arr.shift();
    
  
//   }
  
//   // Setup
//   var testArr = [1,2,3,4,5];
  
//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));





//////--------------Function12-------------//////
/////Prerequisite,Content///////
// 1.Returning Boolean Values from Functions
// function isLess(a, b) {
//     return a < b;
//   }
  
  
//   isLess(10, 15);

  
// 2.Return Early Pattern for Functions
// function abTest(a, b) {
//     if(a<0||b<0){
//       return undefined;
//     }
  
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }
  
//   abTest(2,2);


///////Application/////
// 1.Counting Cards
// var count = 0;

// function cc(card) {
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;
//       break;
//   }

//   if(count > 0){
//      return count + ' Bet';
//   }return count + ' Hold';
 
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');







