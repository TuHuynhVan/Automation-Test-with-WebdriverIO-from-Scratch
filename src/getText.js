describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";
    let hightlightTextSelector = "h3";
    let currentHighlightText;

    it('Learn getText API', () => {

        // 1. Open the target page
        browser.url(pageUrl);

        // 2. Get the Hightlight Text from the page
        $(hightlightTextSelector).waitForDisplayed(5000);
        currentHighlightText = $(hightlightTextSelector).getText();

        console.log(currentHighlightText);

        // 3. Pause a little to see the result
        browser.pause(1000);
    });
});