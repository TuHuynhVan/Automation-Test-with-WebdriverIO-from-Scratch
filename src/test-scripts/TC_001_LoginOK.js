let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');

describe('LOGIN', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;
    const INVALID_LOGIN_CREDS = LoginData.INVALID_LOGIN_CREDS;

    before(() => {
        browser.url('/login')
    });

    it('Login OK', () => {
        LoginPage
            .inputUsername(VALID_LOGIN_CREDS.username)
            .inputPassword(VALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();
    });

    it('LOgin FAILED', () => {
        browser.url('/login')
        
        LoginPage
        .inputUsername(INVALID_LOGIN_CREDS.username)
        .inputPassword(INVALID_LOGIN_CREDS.password)
        .clickOnLoginBtn();
    });
});