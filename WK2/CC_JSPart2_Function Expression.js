//Lab2.3
// function checkPermission(role,fun1,fun2){
//     if(role ==='ADMIN') { fun1(); }
//     else { fun2(); }
// }

// function fun1(){
//     alert('ACCESS GRANTED')
// }

// function fun2(){
//     alert('ACCESS DENIED')
// }

// checkPermission(prompt('Input: '),fun1,fun2);


// Lab2.4
// function magic() {
//     return function (x) {
//       return x * 42;
//     };
//   }
//   const answer = magic();

// //   console.log(answer);  
// // *ƒ (x) {
// //     return x * 42;
// // } //เพราะ ไม่ใส่ () โปรแกรมจึงแปลง ฟังก์ชั่น magic เป็น string แล้วส่งค่ามา

//   console.log(answer(1337)); // **56154 เพราะ เอา1337 ไปคูณ 42

//   console.log(magic(1337)(42)); // ***1764 เพราะเรียกใช้ฟังชั้นซ้อน---> เอา42 ไปคูณ 42 
