let LoginData = require('../test-data/TC_001_LoginOK');

let LoginPage = require('../page-objects/Login');
let WelcomePage = require('../page-objects/Welcome');

describe('LOGIN', () => {

    const VALID_LOGIN_CREDS = LoginData.VALID_LOGIN_CREDS;

    before(() => {
        browser.url('/login');
    });

    it('Login OK', () => {
        LoginPage
            .inputUsername(VALID_LOGIN_CREDS.username)
            .inputPassword(VALID_LOGIN_CREDS.password)
            .clickOnLoginBtn();
            
        WelcomePage.verifyWelcomeText();
    });

});