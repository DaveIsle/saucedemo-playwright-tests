import { Page, Locator, expect } from "@playwright/test";

export class CheckoutCompletePage {
  private readonly returnHomeButton: Locator;
  private readonly checkoutCompleteUrl = "/checkout-complete.html";

  constructor(private readonly page: Page) {
    this.returnHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async goBackHome() {
    await this.returnHomeButton.click();
  }

  async assertOnCheckoutCompletePage() {
    await expect(this.page).toHaveURL(this.checkoutCompleteUrl);
  }
}
