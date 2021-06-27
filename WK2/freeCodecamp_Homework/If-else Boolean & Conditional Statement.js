//การเปรียบเทียบ
//1.Understanding Boolean Values
// function welcomeToBooleans() {
//     return true ; 
//   }


//2.Use Conditional Logic with If Statements
// function trueOrFalse(wasThatTrue) {
//     if(wasThatTrue == true ){
//       return "Yes, that was true"
//     }return "No, that was false"
    
//     }



//เครื่องหมาย 'เท่ากับ'
//1.Comparison with the Equality Operator
// function testEqual(val) {
//     if (val == 12) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   testEqual(10);



//2.Comparison with the Strict Equality Operator
// function testStrict(val) {
//     if (val === 7) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   testStrict(10);



//3.Practice comparing different values
// function compareEquality(a, b) {
//     if (a === b) { 
//       return "Equal";
//     }
//     return "Not Equal";
//   }
  
//   compareEquality(10, "10");



//เครื่องหมาย 'ไม่เท่ากับ'
//4.Comparison with the Inequality Operator
// function testNotEqual(val) {
//     if (val !=99 ) { 
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testNotEqual(10);


//5.Comparison with the Strict Inequality Operator

// function testStrictNotEqual(val) {
//     if (val !== 17) {
//       return "Not Equal";
//     }
//     return "Equal";
//   }
  
//   testStrictNotEqual(10);



//มากกว่า,มากกว่าหรือเท่ากับ,น้อยกว่า,น้อยกว่าหรือเท่ากับ
// 6.Comparison with the Greater Than Operator
// function testGreaterThan(val) {
//     if (val > 100) { 
//       return "Over 100";
//     }
  
//     if (val > 10) {  
//       return "Over 10";
//     }
  
//     return "10 or Under";
//   }
  
//   testGreaterThan(10);


// 7.Comparison with the Greater Than Or Equal Operator
// function testGreaterOrEqual(val) {
//     if (val >= 20) {  
//       return "20 or Over";
//     }
  
//     if (val >= 10) {  
//       return "10 or Over";
//     }
  
//     return "Less than 10";
//   }
  
//   testGreaterOrEqual(10);


// 8.Comparison with the Less Than Operator
// function testLessThan(val) {
//     if (val < 25) {  
//       return "Under 25";
//     }
  
//     if (val < 55) {  
//       return "Under 55";
//     }
  
//     return "55 or Over";
//   }
  
//   testLessThan(10);


// 9.Comparison with the Less Than Or Equal To Operator
// function testLessOrEqual(val) {
//     if (val <= 12) {  
//       return "Smaller Than or Equal to 12";
//     }
  
//     if (val <= 24) {  
//       return "Smaller Than or Equal to 24";
//     }
  
//     return "More Than 24";
//   }
  
//   testLessOrEqual(10);



// And และ Or
// 10.Comparisons with the Logical And Operator
// function testLogicalAnd(val) {
//     if(val <= 50 && val >= 25){ 
//        return "Yes";
//      } 
//      return "No";
//    }
   
//    testLogicalAnd(10);


// 11.Comparisons with the Logical Or Operator
// function testLogicalOr(val) {
//     // Only change code below this line
//     if(val < 10 || val > 20){
//       return "Outside";
//     }return "Inside";
//   }
  
//   testLogicalOr(15);


// Else,Else if
// 1.Introducing Else Statements
// function testElse(val) {
//     var result = "";
//     // Only change code below this line
  
//     if (val > 5) {
//       result = "Bigger than 5";
//     } else result = "5 or Smaller";
  
   
//     // Only change code above this line
//     return result;
//   }
  
//   testElse(4);


// 2.Introducing Else If Statements
// function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     }else if (val < 5) {
//       return "Smaller than 5";
//     }else {
//       return "Between 5 and 10";
//       }
//   }
  
//   testElseIf(7);



// 3.Logical Order in If Else Statements
// function orderMyLogic(val) {
//     if (val < 10 && val >=5) {
//       return "Less than 10";
//     } else if (val < 5) {
//       return "Less than 5";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
  
//   orderMyLogic(7);


// 4.Chaining If Else Statements
// function testSize(num) {

//     if(num < 5){
//       return 'Tiny';
//     }else if(num < 10){
//       return 'Small';
//     }else if(num < 15){
//       return 'Medium';
//     }else if(num < 20){
//       return 'Large';
//     }else if(num >= 20){
//       return 'Huge';
//     }else {
//       return "Change Me";
//     }
//   }
  
//   testSize(7);


// Application
// 1.Golf Code
// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   if(strokes === 1){
//     return "Hole-in-one!";
//   }else if(strokes <= par - 2){
//     return "Eagle"
//   }else if(strokes === par - 1){
//     return "Birdie"
//   }else if(strokes === par){
//     return "Par"
//   }else if(strokes === par + 1){
//     return "Bogey"
//   }else if(strokes === par + 2){
//     return "Double Bogey"
//   }else if(strokes >= par + 3){
//     return "Go Home!"
//   }return "Change Me";
  
// }

// golfScore(5, 4);










