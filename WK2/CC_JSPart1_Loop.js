//Lab9.6  

// let star = "* "
// for(let i=1; i<5; i++){
//     console.log(star)
//     star = star +"* ";
// }



//Lab9.7
// for(let i=2; i<13 ;i++){
//     for(let j=1; j<13;j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }



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
  

//Lab9.9
// let numA = +prompt('Input Num: ');
// let numB;
// let i = 0;


// if(numA >= 1 && numA <=100){

//     do{

//         numB = +prompt('Input Ans: ');
//         i++;

//     }while(numA !== numB)

// }else { alert('Error Num'); }

// alert('Correct!\nทายทั้งหมด ' + i + ' ครั้ง');



//Lab9.10
// let j;
// let i;
// let prime;

// for(i = 2; i <= 100; i++){

//     prime = true;

//     for(j = 2; j <= i; j++){

//         if(i % j === 0 && i !== j){
//             prime = false;
//         }

//     }
        
//     if(prime === true){
//         console.log(i);
//     }
    
// }