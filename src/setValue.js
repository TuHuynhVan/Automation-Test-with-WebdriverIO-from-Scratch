describe('API Learning', () => {

    it('Set value to a text box', () => {
        browser.url("http://the-internet.herokuapp.com/login");
        browser.pause(2000);

        let usernameSelector = "#username";
        $(usernameSelector).setValue("Tu Huynh");

        browser.pause(3000);
    });
});