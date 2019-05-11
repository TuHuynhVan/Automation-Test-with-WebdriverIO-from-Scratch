exports.config = {
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    // Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
}