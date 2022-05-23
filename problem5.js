function copyString(string,repeatAmount){


    if(repeatAmount === 0 || repeatAmount < 0){
        let repeatAmount = 1;
        let result = string.repeat(repeatAmount);
        return result;
    }else{
for(let i = 0; i < repeatAmount; i++){
    return string += repeatAmount[i];
    //return one value and one undefined value
    //when return was placed outside of the loop I hade one
    //string correct and rest were undefined.

}

}
}
