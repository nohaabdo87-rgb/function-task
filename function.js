
// determine  a number is even or odd

// function getNum() {
//     var num = +prompt("Enter a number:");
//     if (num%2 ==0){
//         console.log("The number is even");
//     } 
//      else {
//         console.log("The number is odd");
//     }
// } 
//   getNum();


// determine  a number is even or odd in other way
// function getNum(num) {
//     if (num % 2 == 0) {
//         console.log("The number is even");
//     } else {
//         console.log("The number is odd");
//     }
// }
// getNum(5);
// getNum(10);


// get the largest number

// function getLarger(num1,num2){
// if(num1> num2){
//     console.log(num1)
// }
// else{
//     console.log(num2)
// }

// }
// getLarger(5,10);


// // calculate age

// function getYear(num) {

//     var Age = 2026 - num;
//     console.log(Age);

// }
// getYear(2015);


// // get the odd unmbers to the given number 

// function oddNum(num) {
//     for(var i=1; i<=num; i++){
//         if(i % 2 !== 0){
//             console.log(i);
//         }
//     }
// }
// oddNum(15);


// calc addition

function sum (num){
    var total = 0;

    for(var i=1; i<=num; i++){
              total += i;
            
    }
    console.log(total);
}
sum(4)