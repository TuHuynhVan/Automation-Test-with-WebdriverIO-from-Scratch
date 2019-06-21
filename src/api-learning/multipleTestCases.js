let path = require('path');

describe('APi Learning', () => {

    it('alert handle', () => {
        let pageUrl = 'http://the-internet.herokuapp.com/';
        let jsLinkText = '=JavaScript Alerts';
        let jsCOnfirmElementSelector = '[onclick="jsConfirm()"]';
        // 1. Open page
        browser.url(pageUrl);

        // 2. Click on Alert JS Link
        $(jsLinkText).waitForDisplayed(5000);
        $(jsLinkText).click();

        // Open/trigger the alert
        $(jsCOnfirmElementSelector).waitForDisplayed(5000);
        $(jsCOnfirmElementSelector).click();

        // 3. Get alert content
        let alertText = browser.getAlertText();
        console.log('Alert Content: ', alertText);

        // 4. Click on OK / Accept Alert
        browser.acceptAlert();
        browser.pause(2000)

        // 5. Click On the alert again
        $(jsCOnfirmElementSelector).click();

        // Click on Cancel / Dismiss Alert
        browser.dismissAlert()

        browser.pause(2000);
    });

    it('uploadFile', () => {
        let pageUrl = 'http://the-internet.herokuapp.com/upload';
        let chooseFileSelector = '#file-upload';
        let uploadBtnSelector = '#file-submit';

        // 1. Open the upload page
        browser.url(pageUrl);

        // 2. SetValue for File's path
        let fileToUploadRelativePath = path.join(__dirname, './toupload');
        $(chooseFileSelector).waitForDisplayed(5000);
        $(chooseFileSelector).setValue(fileToUploadRelativePath);

        // 3. Click on [Upload Button]
        $(uploadBtnSelector).click();

        // 4. PAuse a little to see result
        browser.pause(3000);
    });
});

describe('API Learning 02', () => {
    
    it('click', () => {
        const MAX_WAIT_TIME = 5000;

        let pageUrl = "http://the-internet.herokuapp.com/";
        let formAuthenLinkText = '=Form Authentication';
        let usernameSelector = "#username";
        let passwordSelector = "#password";
        let loginBtn = '[type="submit"]';

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