// import { Builder, By, until, WebDriver } from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';
// import path from 'path';

// const service = new chrome.ServiceBuilder(path.join(__dirname, '../../../node_modules/.bin/chromedriver')).build();

// let driver: WebDriver;

// beforeAll(async () => {
//   driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeService(service)
//     .build();
//   await driver.get('http://localhost:3000/login'); // Adjust the URL to match your application's login page
// });

// afterAll(async () => {
//   await driver.quit();
// });

// test('renders login form', async () => {
//   const usernameInput = await driver.findElement(By.name('username'));
//   const passwordInput = await driver.findElement(By.name('password'));
//   const loginButton = await driver.findElement(By.css('button[type="submit"]'));

//   expect(usernameInput).toBeDefined();
//   expect(passwordInput).toBeDefined();
//   expect(loginButton).toBeDefined();
// });

// test('successful login', async () => {
//   const usernameInput = await driver.findElement(By.name('username'));
//   const passwordInput = await driver.findElement(By.name('password'));
//   const loginButton = await driver.findElement(By.css('button[type="submit"]'));

//   await usernameInput.sendKeys('tamcn2603');
//   await passwordInput.sendKeys('@tamCn2222');
//   await loginButton.click();

//   const successMessage = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Login successful')]")), 10000);
//   expect(successMessage).toBeDefined();
// });

// test('failed login', async () => {
//   const usernameInput = await driver.findElement(By.name('username'));
//   const passwordInput = await driver.findElement(By.name('password'));
//   const loginButton = await driver.findElement(By.css('button[type="submit"]'));

//   await usernameInput.clear();
//   await passwordInput.clear();
//   await usernameInput.sendKeys('wronguser');
//   await passwordInput.sendKeys('wrongpassword');
//   await loginButton.click();

//   const errorMessage = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Invalid credentials')]")), 10000);
//   expect(errorMessage).toBeDefined();
// });

// 'use strict'

// const { Builder } = require('selenium-webdriver');

// describe('ACME Bank', () => {
//     let driver;

//     beforeAll(async () => {
//     }, 60000);
    
//     beforeEach(async function() {
//         // driver = await new Builder().forBrowser('chrome').build();
//     }, 60000);

//     test('should log into a bank account', async () => {
//         // await driver.get('https://demo.applitools.com');
//         // await driver.findElement(By.css('#username')).sendKeys('andy');
//         // await driver.findElement(By.css('#password')).sendKeys('i<3pandas');
//         // await driver.findElement(By.id('log-in')).click();
//         // Add assertions here
//     }, 60000);

//     test('should open Google and close it', async () => {
//         // await driver.get('https://www.google.com');
//         // Add assertions here
//     }, 60000);
    
//     afterEach(async function() {
//         // await driver.quit();
//     }, 60000);
    
//     afterAll(async () => {
//     }, 120000);
// });


'use strict'

import { Builder, WebDriver, By } from 'selenium-webdriver';

describe('ACME Bank', () => {
    let driver: WebDriver;

    beforeAll(async () => {
    }, 60000);
    
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    }, 60000);

    test('should log into a bank account', async () => {
        await driver.get('https://demo.applitools.com');
        await driver.findElement(By.css('#username')).sendKeys('andy');
        await driver.findElement(By.css('#password')).sendKeys('i<3pandas');
        await driver.findElement(By.id('log-in')).click();
        // Add assertions here
    }, 60000);

    test('should open Google and close it', async () => {
        await driver.get('https://www.google.com');
        // Add assertions here
    }, 60000);
    
    afterEach(async function() {
        await driver.quit();
    }, 60000);
    
    afterAll(async () => {
    }, 120000);
});