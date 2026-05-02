import { Page, expect } from "@playwright/test";

export class LoginPage {
  private readonly landingPageUrl = "https://www.saucedemo.com/inventory.html";
  private readonly username;
  private readonly password;
  private readonly loginButton;
  private readonly errorMessage;

  constructor(private readonly page: Page) {
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // use base URL from playwright.config.ts
  private async goto() {
    await this.page.goto("/");
  }

  async loginAsStandardUser() {
    await this.goto();
    await this.login("standard_user", "secret_sauce");
    await this.loggedInSuccessfully();
  }

  async loginAsLockedOutUser() {
    await this.goto();
    await this.login("locked_out_user", "secret_sauce");
  }
  
  private async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  private async loggedInSuccessfully() {
    await expect(this.page).toHaveURL(this.landingPageUrl);
  }

  async shouldHaveErrorMessage(text: string) {
    await expect(this.errorMessage).toHaveText(text);
  }
}
