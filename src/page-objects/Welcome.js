const WELCOME_TXT = ".subheader";

class Welcome {

    getWelcomeText() {
        $(WELCOME_TXT).waitForDisplayed(15000);

        let welcomeText = $(WELCOME_TXT).getText();
        return welcomeText;
    }

    verifyWelcomeText(){
        let currentWelcomeText = this.getWelcomeText();
        let expectedWelcomeText = "Welcome to the Secure Area. When you are done click logout below.";
        const VERIFICATION_ERR = '[ERR] WRONG welcome Text';

        expect(currentWelcomeText).to.equal(expectedWelcomeText, VERIFICATION_ERR);
    }
}
module.exports = new Welcome();