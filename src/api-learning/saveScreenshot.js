let path = require('path');

describe('API Learning', () => {

    let pageUrl = 'https://webdriver.io/docs/api/browser/saveScreenshot.html';
    let screenShotPath = './screenShots/SaveScreenShot.png';

    it('Save ScreenShot', () => {

        // Open the target page
        browser.url(pageUrl);

        // Take screenshot and save to somewhere
        browser.saveScreenshot(path.join(__dirname, screenShotPath));

    });
});