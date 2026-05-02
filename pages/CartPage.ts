import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private readonly checkoutButton: Locator;
  private readonly continueShoppingButton: Locator;

  private readonly cartPageUrl = "/cart.html";

  constructor(private readonly page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async assertOnCartPage() {
    await expect(this.page).toHaveURL(this.cartPageUrl);
  }
}
