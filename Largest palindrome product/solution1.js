// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


let num = 1;
let xyz = 234;
let arr = [];
let revse = function(x){
    x = x.toString().split("").reverse().join("");
    return x;
}
let largeNum = function(x){
return x.sort((a,b) => a-b).pop();
}
// console.log(revse(234))
// console.log(xyz.split("").reverse())
for(let i = 100 ; i < 1000 ; i++){
    for(j = 100 ; j < 1000 ; j++){
       num = i*j;
    //   console.log(revse(num));
      if(num == revse(num)){
          arr.push(num);
      }
    }
}
console.log(largeNum(arr));