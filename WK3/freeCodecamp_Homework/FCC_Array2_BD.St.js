/////// Basic DataStructure : Array (12ข้อ)///////////
// 1.Use an Array to Store a Collection of Data
// let yourArray = ['Hi',1,2,3,true];



// 2.Access an Array's Contents Using Bracket Notation
// let myArray = ["a", "b", "c", "d"];
// myArray[1] = 'BBBBBB';
// console.log(myArray);



// 3.Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//     arr.unshift('I', 2, 'three');
//     arr.push(7, 'VIII', 9);
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));



// 4.Remove Items from an Array with pop() and shift()
// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
//   }
  
//   console.log(popShift(['challenge', 'is', 'not', 'complete']))



////////////////Splice/////////////
// 1.Remove Items Using splice()
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(0,1);
// arr.splice(3,4);
// console.log(arr);



//////////////Slice/////////////
// 1.Add Items Using splice()
// function htmlColorNames(arr) {
//     arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
//       return arr;
//     }
    
//     console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));




// 2.Copy Array Items Using slice()
// function forecast(arr) {
//     return arr.slice(2, 4);
//   }
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



/////////////Spread Operator with Array////////////
// 1.Copy an Array with the Spread Operator **ข้อนี้ยังไม่ต้องทำ
// 2.Combine Arrays with the Spread Operator **ข้อนี้ยังไม่ต้องทำ


//////////////indexOf/////////////
// 1.Check For The Presence of an Element With indexOf()
// function quickCheck(arr, elem) {
//     if(arr.indexOf(elem) >= 0) {return true;}
//     else {return false;}
//     }
    
//     console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//////////////////Loop and Other//////////////
// 1.Iterate Through All an Array's Items Using For Loops
// function filteredArray(arr, elem) {
//     let newArr = [];
  
//     for(let i=0; i<arr.length; i++){
//       if(arr[i].indexOf(elem) == -1){
//       newArr.push(arr[i]);  
//       } 
//     }
  
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));




// 2.Create complex multi-dimensional arrays
// let myNestedArray = [
    
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     ['loop', 'shift', 6, 7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array',['deep']],
//     ['mutate', 1327.98, 'splice', 'slice', 'push',[['deeper']]],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[['deepest']]]]
  
//   ];



