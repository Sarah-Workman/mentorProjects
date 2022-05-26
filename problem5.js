function copyString(string,repeatAmount){
     var output = "";

    if(repeatAmount === 0 || repeatAmount < 0){
      let repeatAmount = 1;
      let result = string.repeat(repeatAmount);
      return result;
    }else{
        for(let i = 0; i < repeatAmount; i++){
        output += string;
        return output;
 // should return sarah every time the loop runs

}
   document.write("end of loop");
}

}
