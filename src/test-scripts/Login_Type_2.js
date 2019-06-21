let LoginPage = require('../page-objects/LoginPage_Type_2');

describe('PO type 2', () => {

    it('Login to the Page', () => {

        // 1. Open the page
        browser.url("http://the-internet.herokuapp.com/login");

        // 2. Set creds
        LoginPage.waitForUsernameDisplayed();
        LoginPage.setCreds('Tu', '!@#$%^&*(');

        // 3. Wait a little to see result
        browser.pause(2000);
    });
});