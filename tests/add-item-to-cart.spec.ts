import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test("user can add an item to the cart", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  
  await login.loginAsStandardUser();
  
  await inventory.addItemToCart("sauce-labs-backpack");
  await expect(inventory.cartBadge).toHaveText("1");
});
