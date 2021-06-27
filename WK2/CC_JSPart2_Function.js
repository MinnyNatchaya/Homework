//Lab1.7
// function calaMin(num1,num2){

//     if(num1>num2){
//         return alert(num2);
        
//     }else{
//         return alert(num1);
//     }
    
// }

// calaMin(+prompt("Enter num1:"),+prompt("Enter num2:"));

////////////////////////////////////////////////////
// function calaMin(num1,num2){
//     if(num1 < num2) return num1;
//     return num2;
// }

////////////////////////////////////////////////////
// function calaMin(num1,num2){
//     return num1 < num2 ? num1 : num2;
// }


//Lab1.8
// function login(username,password){
//     if(username == 'admin' && password == 'P@ssw0rd'){
//         return alert("Successful");
//     }else{
//         return alert("Unsuccessful");
//     }
// }
// login(prompt('Enter username:'),prompt('Enter password:'));


//Lab1.9
//-------------1.9.1
// let j;
// let num;
// let isPrimeNum;

// function prime(num){

//     isPrimeNum = true;

//     for(j = 2; j <= num; j++){
        
//         if(num%j === 0 && num !== j){
//             isPrimeNum = false;
//         }
//     }

//     if(isPrimeNum === true && num !== 1){
//         return alert('Is a prime');
//     }return alert('Is a not prime');
    
// }

// prime(+prompt('Input num: '));

//-------------1.9.2

// let j;
// let num;
// let isPrimeNum;
// let i;

// function prime(num){
//     num = +prompt('Input num: ');

//     for(i = 2; i <= num; i++){

//         isPrimeNum = true;

//         for(j = 2; j <= i ; j++){
    
//             if(i % j === 0 && i !== j){
//             isPrimeNum = false;
//             }
//         }
//         if(isPrimeNum === true){
//             console.log(i);
//         }

//     }
// }

// prime();


//Lab1.10
// function squareNum(num) {
//     const result = num * num;
//   }
//   console.log(squareNum(2)); // *undefined เพราะไม่มี return


//Lab1.11
//   function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//   }
//   console.log(sayHi); 
// //*     sayHi(age) {
// //      if (age < 12) alert('Hi kid');
// //      } เพราะสั่งใหเ console แสดงค่า function sayHi (แปลง function เป็น string แล้วแแสดงผล)

//   console.log(sayHi(10)); // **Hi kid เพราะเรียกใช้ function sayHi ด้วย console เฉยๆ

////////////////////////////////////////////////////////
// function sayHi(name) {
//     if (name) {
//       alert('Hi ' + name);
//       return;
//     } else {
//       return 'Who are you';
//     }
//   }
//   console.log(sayHi('John')); // ***Hi John เพราะ John ไปแทน name
//   console.log(sayHi()); // **** Who are you เพราะ ไม่มีค่าอะไรไปอทน name เลยไม่เข้า if


//Lab12  
// function getLongText() {
//     return 
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//   }
  
//   console.log(getLongText()); // *undefined เพราะ return อยู่คนละบรรทัด

//Lab13

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//13.1

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }  return confirm('Did parents allow you?');
//   }
// checkAge();

//13.2

// (age) => age > 18 ? true : confirm('Did parents allow you?');
// checkAge();

//13.3

// (age) => age > 18 || true || confirm('Did parents allow you?');
// checkAge();


//Lab14 
// function max(num1,num2,num3,num4){

//   return console.log(Math.max(num1,num2,num3,num4));
// }
// max(7,3,9,2);
