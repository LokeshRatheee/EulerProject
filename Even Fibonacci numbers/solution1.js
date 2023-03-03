let inputNumber;
let d1 = 0;
let d2 = 1;
let total;
let sum = 0;
let EvenFibonacciNumbers = function(number){
    for(let i = 0 ; sum <= number ; i++){
        total = d1+d2;
        d1 = d2;
        d2 = total;
        if(total%2 === 0){
            sum = sum + total;   
        }
    }
    console.log(sum);
}
EvenFibonacciNumbers(400000000000000000000000000000000)