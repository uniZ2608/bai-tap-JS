function nto(n){
    if (n<2) return false;
    for (let i=2; i<=Math.sqrt(n); i++){
        if (n%i===0) return false;
    }
    return true;
}

for (let i = 1000; i >= 1000; i++){
    if (nto(i)){
        console.log(i);
        break;
    }
}