
for(let i = 2;  ; i++){
    match = true;
    for(let j = 1 ; j <= 20 ; j++){
        if(i % j !== 0){
            match = false;
        }
    }
    if(match === true){
        console.log(i);
        break;
    }
}

