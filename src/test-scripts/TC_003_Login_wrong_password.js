let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');

describe('LOGIN', () => {

    const INVALID_LOGIN_PASSWORD = LoginData.INVALID_LOGIN_PASSWORD;

    before(() => {
        browser.url('/login');
    });

    it('Login with wrong password', () => {
        LoginPage
            .inputUsername(INVALID_LOGIN_PASSWORD.username)
            .inputPassword(INVALID_LOGIN_PASSWORD.password)
            .clickOnLoginBtn();

        LoginPage.verifyInvalidPasswordText();
    });

});