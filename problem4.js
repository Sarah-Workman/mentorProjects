
//Check and see if symbol is already present, if so return value given. If not, add a symbol to the number.
function addDollarSymbol(paymentAmount){
  const symbol = "$";

  let replace = paymentAmount.replaceAll('$', '');
<<<<<<< HEAD
  let result = (`${symbol} ${paymentAmount}`);
=======
  let result = (`${symbol}`+ replace);
>>>>>>> 1450574891f68cdcdec6498a31e4cf8ddd7bd6dd
  return result;






}
