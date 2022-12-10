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