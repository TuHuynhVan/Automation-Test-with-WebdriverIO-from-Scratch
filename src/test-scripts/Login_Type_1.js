let LoginPage = require('../page-objects/LoginPage_Type_1.js');

describe('Login Type 01', () => {
    
    it('Login to the Page', () => {
        browser.url("http://the-internet.herokuapp.com/login");

        LoginPage.waitForUsernameDisplayed();
        LoginPage.username.setValue('ABC');
        LoginPage.password.setValue('XYZ');
        LoginPage.loginBtn.click();

        browser.pause(2000)
    });
});