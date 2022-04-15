
//check for number. Take number and add a money symbol. 
function addDollarSymbol(paymentAmount){
   if(isNaN(paymentAmount)){
        return "Provide integers"
   } else{
       return "$" + paymentAmount;
  }
}