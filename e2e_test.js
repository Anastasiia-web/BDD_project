const LoginPage = require("./pages/LoginPage");

Feature('Zero Bank Application - E2E Tests');

Before(({ I }) => {
    console.log('Before hook')
    I.amOnPage('http://zero.webappsecurity.com/')
})

After(({ I }) => {
    console.log('After hook')
})

Scenario('Login Test - Negative', ({ I, LoginPage }) => {
    I.click('#signin_button')
    LoginPage.assertLoginFormIsVisible()
    LoginPage.submitLogin('invalid user', 'invalid password')
    I.seeElement('.alert-error')
});


// npx codeceptjs run e2e_test.js                      => to run this file only


// test before using Page Object Model

// Scenario('Login Test - Negative', ({ I }) => {
//     I.click('#signin_button')
//     I.see('Log in to ZeroBank')
//     I.fillField('#user_login', 'invalid user')
//     I.fillField('#user_password', 'invalid password')
//     I.click('Sign in')
//     I.seeElement('.alert-error')
// });