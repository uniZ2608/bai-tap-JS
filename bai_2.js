function check(nam){
    if(nam % 4 == 0){
        if(nam % 100 == 0){
            if(nam % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

let nam = parseInt(prompt());
console.log(check(nam));