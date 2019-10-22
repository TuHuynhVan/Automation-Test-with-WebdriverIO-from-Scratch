describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/';
    let welcomeTextSelector = 'h1';

    it('Get Color CSS value', () => {

        // 1. Open the target page
        browser.url(pageUrl);

        // 2. Get the color css value
        $(welcomeTextSelector).waitForDisplayed(5000);
        let colorValue = $(welcomeTextSelector).getCSSProperty('color');

        // 3. Print out the css value
        console.log('Color Value: ', colorValue.parsed.hex);

    });
});