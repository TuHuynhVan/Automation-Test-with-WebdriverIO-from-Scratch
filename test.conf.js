let chai = require("chai");

exports.config = {

    // Test Scripts
    specs: [
        "src/test-scripts/TC_001_LoginOK.js",
        // "src/test-scripts/TC_002_Login_wrong_username.js",
        // "src/test-scripts/TC_003_Login_wrong_password.js"
    ],

    suites: {
        api_learning: [
            "src/api-learning/alertHandle.js",
            "src/api-learning/click.js"
        ],
        login_function: [
            "src/test-scripts/TC_001_LoginOK.js",
            "src/test-scripts/TC_002_Login_wrong_username.js",
            "src/test-scripts/TC_003_Login_wrong_password.js"
        ]
    },
    maxInstances: 2,

    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 4444,
    // path: '//',

    baseUrl: "http://the-internet.herokuapp.com",

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ],

    before: () => {
        global.expect = chai.expect;
    },

    afterTest: (test) => {
        // 1. I wanna save a PNG File when the test failed
        if (test.passed === false) {
            let fileName = test.fullTitle;
            browser.saveScreenshot('./' + fileName + '.png')
        }
    },
}