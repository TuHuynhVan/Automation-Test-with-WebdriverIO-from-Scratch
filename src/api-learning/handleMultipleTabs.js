describe('API Learning', () => {

    let pageUrl = 'https://webdriver.io/docs/api.html';
    let editBtnSelector = '.edit-page-link.button';

    it('Handle Multiple Windows', () => {

        // 1. Open the target page
        browser.url(pageUrl);

        // 2. Click on the Edit Button
        $(editBtnSelector).waitForDisplayed(5000);
        $(editBtnSelector).click();

        // 3. Get all current windows ID / Array
        let allWindowsIds = browser.getWindowHandles();
        console.log(allWindowsIds);

        let firstWindowId = allWindowsIds[0];
        let secondWindowId = allWindowsIds[1];

        // 4. Switch to the second window/tab
        browser.switchToWindow(secondWindowId);

        // 5. Print out the 2nd window's title
        let secondWindowTitle = browser.getTitle();
        console.log('2nd Window Title: ', secondWindowTitle);

        // 6. Switch To the 1st window
        browser.switchToWindow(firstWindowId);

        // 7. Print out the 1st window's title
        let firstWindowTitle = browser.getTitle();
        console.log('1st Window Title: ', firstWindowTitle);

        // Pause(3000)
        browser.pause(2000);
    });
});