// Credit Card Obscuring Function
//Function below takes a credit card number as a string and hides everything except the last four characters. Function also checks that the input is between 12 and 16 characters. If the length is invalid, it returns "Invalid Credit Card".

function obscureCreditCard(cardNumber) {
	if (cardNumber.length < 12 || cardNumber.length > 16) {
		return "Invalid Credit Card";
	}

	return "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}

module.exports = obscureCreditCard;
