
//check for number. Take number and add a money symbol. 
function addDollarSymbol(x){
   if(isNaN(x)){
        return "Provide integers"
   } else{
       return "$" + x;
  }
}