describe('API learning', () => {

    const MAX_WAIT_TIME = 5000;

    let pageUrl = "http://the-internet.herokuapp.com/";
    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = "#username";
    let passwordSelector = "#password";
    let loginBtn = '[type="submit"]';

    it('Click on Link Text', () => {

        // [1] Open the index page
        browser.url(pageUrl);

        // [2] Click on [Form Authentication] Link text
        $(formAuthenLinkText).waitForDisplayed(MAX_WAIT_TIME);
        $(formAuthenLinkText).click();

        // [3] Inpust username and password
        $(usernameSelector).waitForDisplayed(MAX_WAIT_TIME);
        $(usernameSelector).setValue('Tu Huynh');
        $(passwordSelector).setValue('blahblah...');

        // [4] Click on the Login Button
        $(loginBtn).click();

        browser.pause(3000);
    });
});