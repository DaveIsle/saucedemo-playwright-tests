import { Page, Locator, expect } from "@playwright/test";

export class InventoryPage {
  readonly cartBadge: Locator;
  private readonly cartLink: Locator;
  private readonly inventoryPageUrl = "/inventory.html";

  constructor(private readonly page: Page) {
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addItemToCart(name: string) {
    await this.page.locator(`[data-test="add-to-cart-${name}"]`).click();
  }

  async removeItemFromCart(name: string) {
    await this.page.locator(`[data-test="remove-${name}"]`).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async assertOnInventoryPage() {
    await expect(this.page).toHaveURL(this.inventoryPageUrl);
  }
}
