// Selenium WebDriver tests for the assignment application
const { Builder, By, until } = require("selenium-webdriver"); 


async function runTests() {
	const driver = await new Builder().forBrowser("chrome").build();

	try {
		// Test 1: Homepage title
		await driver.get("http://localhost:3000");
		const homeTitle = await driver.getTitle();

		if (homeTitle === "Home") {
			console.log("PASS: Homepage title is Home");
		} else {
			console.log(`FAIL: Expected Home, received ${homeTitle}`);
		}

		// Test 2: Contact page title
		await driver.get("http://localhost:3000/contact");
		const contactTitle = await driver.getTitle();

		if (contactTitle === "Contact Us") {
			console.log("PASS: Contact page title is Contact Us");
		} else {
			console.log(`FAIL: Expected Contact Us, received ${contactTitle}`);
		}

		// Test 3: More info email message
		await driver.get("http://localhost:3000/contact");

		const email = "soli@example.com";

		const emailInput = await driver.wait(
			until.elementLocated(By.id("formInput")),
			5000,
		);
        
		await driver.wait(until.elementIsVisible(emailInput), 5000);
		await driver.wait(until.elementIsEnabled(emailInput), 5000);

		await emailInput.sendKeys(email);

		const submitButton = await driver.wait(
			until.elementLocated(By.id("formSubmit")),
			5000,
		);

		await driver.wait(until.elementIsVisible(submitButton), 5000);
		await driver.wait(until.elementIsEnabled(submitButton), 5000);

		await submitButton.click();

		const message = await driver.wait(
			until.elementLocated(By.id("formMessage")),
			5000,
		);

		await driver.wait(until.elementIsVisible(message), 5000);

		const actualMessage = await message.getText();
		const expectedMessage = `More info coming to ${email}`;

		if (actualMessage === expectedMessage) {
			console.log("PASS: More info message is correct");
		} else {
			console.log(
				`FAIL: Expected "${expectedMessage}", received "${actualMessage}"`,
			);
		}
	} finally {
		await driver.quit();
	}
}

runTests();
