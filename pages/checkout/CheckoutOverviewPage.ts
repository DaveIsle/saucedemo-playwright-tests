import { Page, Locator, expect } from "@playwright/test";

export class CheckoutOverviewPage {
  private readonly completeCheckoutButton: Locator;
  private readonly checkoutYourInfoUrl = "/checkout-step-two.html";
  private readonly pageTitle: Locator;
  private readonly pageTitleText = "Checkout: Overview";

  constructor(private readonly page: Page) {
    this.completeCheckoutButton = page.locator('[data-test="finish"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async completeCheckout() {
    await this.completeCheckoutButton.click();
  }

  /**
   * Assert both URL and page title here because the checkout URL's are number ordered. 
   * If the page ordering changes, we may not be on the expected page anymore and this will catch it.
   */
  async assertOnCheckoutOverviewPage() {
    await expect(this.page).toHaveURL(this.checkoutYourInfoUrl);
    await expect(this.pageTitle).toHaveText(this.pageTitleText);
  }
}
