const { is } = require("express/lib/request");

Feature('My Test Suite');

Scenario('Should load example.com website', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.see('Example')                                     // assert that the text containing "Example" is on the page
});

Scenario('Should have header', ({ I }) => {
    I.amOnPage('https://www.example.com')
    I.dontSee('Google')
    I.seeElement('h1')
});

// Scenario('Test URL', ({ I }) => {
//     I.amOnPage('https://www.example.com')
//     I.seeInCurrentUrl('test')                            // was created for taking screenshot of the failed test assertion                         
// });




// npx codeceptjs run

// if in "scripts" in "package.json" file instead of:

// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
// }

// is

// "scripts": {
//     "test": "codeceptjs run",
//     "e2e": "codeceptjs run e2e_test.js"
//     "example": "codeceptjs run example_test.js"
// }

// simply run "npm run test" / "npm run e2e" / "npm run example"
