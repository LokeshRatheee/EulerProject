// let i = 2;
let usernum = 600851475143;
let xyz = 600851475143;
let temp = 0
const arr = [];
for(let i = 2 ;i <= usernum ; i++){
    
     temp = xyz;
     
    //  console.log(xyz);
     if(temp%i === 0){
        arr.push(i);
        xyz = temp/i;
        console.log(` ${i}temp = ` + temp)
        
     }
     else if (temp == 1){
         break;
     }
}
let result = arr.sort((a,b) => a-b).pop();
console.log(result)

