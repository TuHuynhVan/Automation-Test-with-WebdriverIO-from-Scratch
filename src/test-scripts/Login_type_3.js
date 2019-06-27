let LoginPage = require('../page-objects/LoginPage_Type_3');

describe('PO -3', () => {

    it('Login To the page', () => {

        // 1. Open the target page
        
        LoginPage.openTestingPage('/login');

        // 2. Call PO's interactionMethod
        LoginPage
            .inputUsername('fghjkl')
            .inputPassword('!@#$%^&*')
            .clickOnLoginBtn();
        
        browser.pause(2000);
    });
});