describe('Learning API', () => {

    it('Set value to a textbox', () => {
        browser.url("https://the-internet.herokuapp.com/login");
        browser.pause(2000);

        let usernameSelector = "#username";
        $(usernameSelector).setValue("Huong Giang");

        browser.pause(3000);
    });
});