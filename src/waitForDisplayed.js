describe('Learning API', () => {

    let loginUrl = "http://the-internet.herokuapp.com/login";
    let usernameSelector = '#username';
    let passwordSelector = '#password';

    it('waitForDisplayed', () => {

        // [1] Open the login page
        browser.url(loginUrl);

        // [2] Wait for the username textbox displayed
        $(usernameSelector).waitForDisplayed(5000);

        // [3] Input username and password
        $(usernameSelector).setValue('Tu Huynh');
        $(passwordSelector).setValue('abc');

        // [4] Pause a little to see the result
        browser.pause(2000);
    });

});