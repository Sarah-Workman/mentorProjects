function copyString(string,repeatAmount){
let result = "";

      if(repeatAmount === 0 || repeatAmount < 0){
        let repeatAmount = 1;
        for(let i = 0; i < repeatAmount; i++){
            result+=string;
        }
     return result;
      }else{
          for(let i = 0; i < repeatAmount; i++){
              result+=string;
          }
          return result;

}
}
