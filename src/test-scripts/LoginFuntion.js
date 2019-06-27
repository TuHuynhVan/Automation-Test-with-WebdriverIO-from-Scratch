let LoginPage = require('../page-objects/LoginPage_Type_3');

describe('Login Funtion', () => {

    before(() => {
        // 1. Do something in common for all test scripts
        // 2. To create testing data for all scripts
        console.log("START")
    });

    beforeEach(() => {
        console.log('\tBefore Script')
    });

    afterEach(() => {
        console.log('\tAfter Script')
    });

    it('Login Failed', () => {
        console.log('\t\tTC_001')
    });

    it('Login Passed', () => {
        console.log('\t\tTC_002')
    });

    after(() => {
        // 1. Clean up testing data
        console.log('=> DONE')
    });
});