let LoginPage = require('../page-objects/LoginPage_Type_3');

describe('Login Funtion', () => {

    before(() => {
        // 1. Do something in common for all test scripts
        // 2. To create testing data for all scripts
        browser.url('/login')
    });

    it('Login Failed', () => {
        LoginPage
            .inputUsername('sfdsj')
            .inputPassword('kjsdfhsa')
            .clickOnLoginBtn();
    });

    it('Login Passed', () => {
        browser.url('/login')
        LoginPage
            .inputUsername('tomsmith')
            .inputPassword('SuperSecretPassword!')
            .clickOnLoginBtn();
    });

    after(() => {
        // 1. Clean up testing data
        console.log('=> Testing DONE')
    });
});