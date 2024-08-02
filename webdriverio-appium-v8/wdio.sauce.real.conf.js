exports.config = {
    deprecationWarnings: false,
    framework: 'mocha',
      mochaOpts: {
          timeout: 40000
      },
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'debug',
    logOutput: '/Users/stuart/Developer/WebdriverIO/wdio-example/webdriver.log',
    services: ['sauce'],
    maxInstances: 15,
    maxInstancesPerCapability: 15,
    capabilities: [{
        browserName: 'safari',
        platformName: 'iOS',
        'appium:deviceName': 'iPhone.*',
        'appium:automationName': 'XCUITest',
        'appium:deviceOrientation': 'portrait',
        'sauce:options': {
          appiumVersion: process.env.APPIUM_VERSION,
          build: `Lamps Plus Appium Troubleshooting`
          },
        },
    ],
    specs: [
      './test/**/lampsplus.spec.js'
    ]
  };
  
  
