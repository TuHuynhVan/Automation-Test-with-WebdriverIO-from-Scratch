let chai = require("chai");

const GRID_IP = process.env.GRID_IP;
const GRID_PORT = process.env.GRID_PORT;
const TESTING_URL = process.env.TESTING_URL;

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
    maxInstances: 5,

    capabilities: [
        {
            browserName: "chrome"
        },
        {
            browserName: "firefox"
        },
        {
            browserName: "MicrosoftEdge"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: GRID_IP,
    port: parseInt(GRID_PORT, 10),
    // path: '//',

    baseUrl: TESTING_URL,

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