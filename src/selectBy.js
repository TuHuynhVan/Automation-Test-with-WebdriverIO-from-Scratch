describe('API Learning', () => {

    let pageUrl = "http://the-internet.herokuapp.com/dropdown";
    let dropDownSelector = "#dropdown";

    it('Handle Dropdown menu', () => {

        // [1] Open the target page
        browser.url(pageUrl);

        // [2] Select [Option 1] from the dropdown menu
        $(dropDownSelector).waitForDisplayed(5000);
        $(dropDownSelector).selectByVisibleText('Option 1');

        // [3] Pause a little to see result
        browser.pause(1000);

        // [4] Select [Option 2] by using selectByAttribute
        $(dropDownSelector).selectByAttribute('value', '2');

        // [5] Pause a little to see result
        browser.pause(3000);
    });

});