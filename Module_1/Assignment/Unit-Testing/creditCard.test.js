// Credit Card Unit Tests
// Using Jest to test the credit card obscuring function.
// Following Test Driven Development (TDD), I wrote the tests first, confirmed they failed, and then added the function to make them pass. The tests will cover valid card lengths, invalid lengths,and whether the last four characters remain visible.

const obscureCreditCard = require("./creditCard");

describe("Credit Card Tests", () => {
	test("As a user, I want my credit card number obscured", () => {
		expect(obscureCreditCard("1234567890123456")).toEqual(
			"************3456",
		);
	});
	test("As a user, I want a 12-character credit card number obscured", () => {
		expect(obscureCreditCard("123456789012")).toEqual("********9012");
	});

	test("As a user, I want a 14-character credit card number obscured", () => {
		expect(obscureCreditCard("12345678901234")).toEqual("**********1234");
	});

	test("As a user, I want an error for a credit card number that is too short", () => {
		expect(obscureCreditCard("12345678901")).toEqual("Invalid Credit Card");
	});

	test("As a user, I want an error for a credit card number that is too long", () => {
		expect(obscureCreditCard("12345678901234567")).toEqual(
			"Invalid Credit Card",
		);
	});

	test("As a user, I want non-numeric characters obscured too", () => {
		expect(obscureCreditCard("ABCDEFGH1234")).toEqual("********1234");
	});
});
