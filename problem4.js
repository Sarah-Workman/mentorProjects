//Check and see if symbol is already present, if so return value given. If not, add a symbol to the number.
function addDollarSymbol(paymentAmount) {
	const symbol = "$";

	let replace = paymentAmount.replaceAll("$", "");
	let result = `${symbol} ${paymentAmount}`;
	return result;
}
