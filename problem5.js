function copyString(string,repeatAmount){


    if(repeatAmount === 0 || repeatAmount < 0){
        let repeatAmount = 1;
        let result = string.repeat(repeatAmount);
        return result;
    }else {let result = string.repeat(repeatAmount);
    return result;}
}