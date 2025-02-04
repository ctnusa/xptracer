import { Builder, By, until, WebDriver } from "selenium-webdriver";

let driver: WebDriver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:5173");
});

afterAll(async () => {
  await driver.quit();
});

test('renders login form', async () => {
  const usernameInput = await driver.findElement(By.id('username'));
  const passwordInput = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.css('button[type="submit"]'));

  expect(usernameInput).toBeDefined();
  expect(passwordInput).toBeDefined();
  expect(loginButton).toBeDefined();
});

test("successful login", async () => {
  const usernameInput = await driver.findElement(By.id("username"));
  const passwordInput = await driver.findElement(By.id("password"));
  const loginButton = await driver.findElement(By.css('button[type="submit"]'));

  await usernameInput.sendKeys("tamcn2603");
  await passwordInput.sendKeys("@tamCn2222");
  await loginButton.click();

  // const successMessage = await driver.wait(
  //   until.elementLocated(By.xpath("//*[contains(text(), 'Login successful')]")),
  //   10000
  // );
  // expect(successMessage).toBeDefined();
});

test('failed login', async () => {
  const usernameInput = await driver.findElement(By.id('username'));
  const passwordInput = await driver.findElement(By.id('password'));
  const loginButton = await driver.findElement(By.css('button[type="submit"]'));

  await usernameInput.clear();
  await passwordInput.clear();
  await usernameInput.sendKeys('wronguser');
  await passwordInput.sendKeys('wrongpassword');
  await loginButton.click();

  // const errorMessage = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Invalid credentials')]")), 10000);
  // expect(errorMessage).toBeDefined();
});
