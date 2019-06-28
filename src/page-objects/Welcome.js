const WELCOME_TXT = ".subheader";

class Welcome {

    getWelcomeText() {
        $(WELCOME_TXT).waitForDisplayed(15000);

        let welcomeText = $(WELCOME_TXT).getText();
        return welcomeText;
    }
}
module.exports = new Welcome();