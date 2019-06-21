let path = require('path');

describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/upload';
    let chooseFileSelector = '#file-upload';
    let uploadBtnSelector = '#file-submit';

    it('Upload File', () => {

        // 1. Open the upload page
        browser.url(pageUrl);
        
        // 2. SetValue for File's path
        let fileToUploadRelativePath = path.join(__dirname, './toupload');
        $(chooseFileSelector).waitForDisplayed(5000);
        $(chooseFileSelector).setValue(fileToUploadRelativePath);

        // 3. Click on [Upload Button]
        $(uploadBtnSelector).click();

        // 4. PAuse a little to see result
        browser.pause(3000);
    });
});