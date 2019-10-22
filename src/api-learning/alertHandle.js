describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/';
    let jsLinkText = '=JavaScript Alerts';
    let jsCOnfirmElementSelector = '[onclick="jsConfirm()"]';

    it('Alert Handle', () => {

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
});