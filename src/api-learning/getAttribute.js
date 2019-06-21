describe('API Learning', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/login';
    let usernameSelector = '#username';

    it('Get Attribute for username text box', () => {

        // 1. Open The target Page
        browser.url(pageUrl);

        // 2. Get all desirsed atributes
        $(usernameSelector).waitForDisplayed(5000);

        let typeAtt = $(usernameSelector).getAttribute('type');
        let nameAtt = $(usernameSelector).getAttribute('name');
        let idAtt = $(usernameSelector).getAttribute('id');

        console.log('TYPE: ', typeAtt);
        console.log('NAME: ', nameAtt);
        console.log('ID: ', idAtt);
        
    });
});