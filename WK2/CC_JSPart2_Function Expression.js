//Lab2.3
// const checkPermission = function(role,success,reject){
//     if(role ==='ADMIN') return success();
//     return reject();
// };

// checkPermission(
//     'ADmin',
//     function(){
//         alert('ACCESS GRANTED');
//     },
//     function(){
//         alert('ACCESS DENIED');
//     }
// )
    


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

//   console.log(magic(1337)(42)); // ***1764 เพราะเหมือนเรียกใช้ฟังชั้นซ้อน--->แทนxเลย-->  เอา42 ไปคูณ 42 
