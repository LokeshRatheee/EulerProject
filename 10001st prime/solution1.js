
let x= 0 ;
let find = 10001;
for (var counter = 2; x <= find; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
      x++;
      // console.log(x)
      if(x === find){
        console.log(counter);
      }
                
    }
}