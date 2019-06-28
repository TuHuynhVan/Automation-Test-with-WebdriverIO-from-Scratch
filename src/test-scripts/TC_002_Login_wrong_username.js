let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');

describe('LOGIN', () => {

    const INVALID_LOGIN_USERNAME = LoginData.INVALID_LOGIN_USERNAME;

    before(() => {
        browser.url('/login');
    });

    it('Login with wrong username', () => {
        LoginPage
            .inputUsername(INVALID_LOGIN_USERNAME.username)
            .inputPassword(INVALID_LOGIN_USERNAME.password)
            .clickOnLoginBtn();

        LoginPage.verifyInvalidUsernameText();
    });

});