let userInput = 100;
let sum_of_the_squares = 0;
let square_of_the_sum = 0;
let sum = 0;
let diff = function(n){
    for(let i = 1 ; i <= n ; i++ ){
        sum_of_the_squares = sum_of_the_squares + i*i;
        sum = sum + i;
        square_of_the_sum = sum*sum;
    }
    console.log(sum_of_the_squares);
    console.log(square_of_the_sum);
    return square_of_the_sum - sum_of_the_squares;
}
console.log(diff(userInput));