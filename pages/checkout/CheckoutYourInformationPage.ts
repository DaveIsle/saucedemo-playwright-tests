import { Page, Locator, expect } from "@playwright/test";

export class CheckoutYourInformationPage {
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly postalCode: Locator;
  private readonly continueButton: Locator;
  private readonly checkoutYourInfoUrl = "/checkout-step-one.html";
  private readonly pageTitle: Locator;
  private readonly pageTitleText = "Checkout: Your Information";

  constructor(private readonly page: Page) {
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async fillCustomerInfo(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  /**
   * Assert both URL and page title here because the checkout URL's are number ordered.
   * If the page ordering changes, we may not be on the expected page anymore and this will catch it.
   */
  async assertOnCheckoutInfoPage() {
    await expect(this.page).toHaveURL(this.checkoutYourInfoUrl);
    await expect(this.pageTitle).toHaveText(this.pageTitleText);
  }
}
