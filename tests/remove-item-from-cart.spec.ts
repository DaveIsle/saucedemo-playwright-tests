import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("user can remove an item from the cart", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.loginAsStandardUser();

  await inventory.addItemToCart("sauce-labs-bike-light");
  await expect(inventory.cartBadge).toHaveText("1");

  await inventory.removeItemFromCart("sauce-labs-bike-light");
  await expect(inventory.cartBadge).not.toBeVisible();
});
