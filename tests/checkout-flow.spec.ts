import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

import { CheckoutYourInformationPage } from "../pages/checkout/CheckoutYourInformationPage";
import { CheckoutOverviewPage } from "../pages/checkout/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../pages/checkout/CheckoutCompletePage";

test("user can complete the checkout flow", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkoutInfo = new CheckoutYourInformationPage(page);
  const checkoutComplete = new CheckoutCompletePage(page);

  await login.loginAsStandardUser();

  //add item to cart and navigate to cart page
  await inventory.addItemToCart("sauce-labs-backpack");
  await expect(inventory.cartBadge).toHaveText("1");
  await inventory.goToCart();

  // assert on cart page and proceed to checkout
  await cart.assertOnCartPage();
  await cart.proceedToCheckout();

  // fill checkout info and continue checking out
  await checkoutInfo.assertOnCheckoutInfoPage();
  await checkoutInfo.fillCustomerInfo("John", "Doe", "12345");
  await checkoutInfo.continueCheckout();

  // assert on overview page and complete checkout
  const checkoutOverview = new CheckoutOverviewPage(page);
  await checkoutOverview.assertOnCheckoutOverviewPage();
  await checkoutOverview.completeCheckout();

  // assert on checkout complete page and navigate back home
  await checkoutComplete.assertOnCheckoutCompletePage();
  await checkoutComplete.goBackHome();

  // assert we are back on the inventory page after completing checkout
  await inventory.assertOnInventoryPage();
});
