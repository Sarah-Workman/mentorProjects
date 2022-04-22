
//Check and see if symbol is already present, if so return value given. If not, add a symbol to the number. 
function addDollarSymbol(paymentAmount){
   const symbolCheck = new RegExp(/[$]/);

   
     if( symbolCheck.test(paymentAmount)){
        return paymentAmount;
   } 
   else{
       return "$" + paymentAmount;
  }
  
}