describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/";
    let welcomeTextSelector = "h1";
    let currentUrl = "";
    let currentPageTitle = "";

    it('getUrl and getTitle API', () => {

        // 1. Open the target page
        browser.url(pageUrl);
        $(welcomeTextSelector).waitForDisplayed(5000);

        // 2. Get the current page url and print out
        currentUrl = browser.getUrl();

        // 3. Get the current page title and print out
        currentPageTitle = browser.getTitle();

        console.log('Current URL: ', currentUrl);
        console.log('Current Page Title: ', currentPageTitle);

    });

});