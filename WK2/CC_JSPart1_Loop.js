//Lab9.6  

// let star = "* "
// for(let i=1; i<5; i++){
//     console.log(star)
//     star = star +"* ";
// }
///////////////วิธี2 ใช้ \n////////////////////////
// let str = '';

// for (let i = 0; i < 4; i++){
//     for(let j = 0; j < 4; j++){
//         if(i >= j){
//             str += '*';
//         }else{
//             break;
//         }  
//     }
//     str += '\n';  
// }
// console.log(str);


//Lab9.7
// for(let i=2; i<13 ;i++){
//     for(let j=1; j<13;j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }
///////////////ใช้ \n ////////////////////////////////
// let str = '';
// for(let i=2; i<13 ;i++){
//     for(let j=1; j<13;j++){
//         str += `${i} x ${j} = ${i*j}\n`;
//     }
//     str +='\n';
// }
// console.log(str);


//Lab9.8 
// let input = 0;
// let sum = 0;
// let avg = 0;
// let n = 0;
// while(true){
//     input = prompt('Enter Number: ');
//     if(input === '0' || input < 0 || input == null || input.trim === '' || !(+input)){
//         break;
//     }
//     sum = sum + +input;
//     n++;  
// }
// avg = sum/n;
// console.log(sum);
// console.log(avg);
//////////////ย่อ if////////////////////
// let input = 0;
// let sum = 0;
// let avg = 0;
// let n = 0;

// while(true){
//     input = prompt('Enter Number: ');
//     if(+input <=0 || !+input){
//         break;
//     }

//     sum += +input;
//     n++;  
// }
// avg = sum/n;
// console.log('sum = ' + sum);
// console.log('avg = ' + avg);

  

//Lab9.9
// let correctNumber = prompt('Enter correct number');
// if(!isNumeric(correctNumber)){
//     alert("You don't enter number");
// }

// let count = 0;
// while(1){
//     let guessNumber = prompt('Guess my number');
//     if(!isNumeric(guessNumber)){
//         alert("You don't enter number");
//         continue; 
//     }

//     count++;

//     if(+correctNumber === +guessNumber){
//         alert(`ยินดีด้วย คุณทายทั้งหมด ${count} ครั้ง`);
//         break;
//     }else if(+correctNumber < +guessNumber){
//         alert('คุณทายค่ามากเกินไป')
        
//     }else{
//         alert('คุณทายค่าน้อยเกินไป')
//     }
// }

// function isNumeric(number){
//     return !(!number || number.trim() === '' || !+number);
// }




//Lab9.10

// for(let i = 2; i <= 100; i++){

//     let prime = true;

//     for(let j = 2; j < i; j++){

//         if(i % j === 0){
//             prime = false;
//         }

//     }
        
//     if(prime){
//         console.log(i);
//     }
    
// }