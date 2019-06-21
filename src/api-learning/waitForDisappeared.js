describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/login";
    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = "#username";
    let passwordSelector = "#password";
    let loginBtn = '[type="submit"]';
    let welcomeTextSelector = 'h2';

    it('Wait for Disappeared', () => {

        // 1. Open the target page
        browser.url(pageUrl);

        // 2. Input username and password
        $(usernameSelector).waitForDisplayed(5000);
        $(usernameSelector).setValue('tomsmith');
        $(passwordSelector).setValue('SuperSecretPassword!');

        // 3. Click on the [Login] button
        $(loginBtn).click();

        // 4. Wait until the [Login] button disappeared
        $(loginBtn).waitForDisplayed(5000, true, '[ERR] Login process takes longer than 5s');

        // 5. Get the h1 text content and print out
        let welcometext = $(welcomeTextSelector).getText();
        console.log(welcometext);

    });
});