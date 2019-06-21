const USER_NAME_TXTBX = '#username';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {

    waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDislayed(15000);
    }

    setCreds(username, password) {
        $(USER_NAME_TXTBX).setValue(username);
        $(PASSWORD_TXTBX).setValue(password);
        $(LOGIN_BTN).click();
    }

}
module.exports = new LoginPage();