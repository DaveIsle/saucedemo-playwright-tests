import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("user can log in successfully", async ({ page }) => {
  const login = new LoginPage(page);
  await login.loginAsStandardUser();
});

test("user cannot log in with locked out account", async ({ page }) => {
  const login = new LoginPage(page);
  await login.loginAsLockedOutUser();
  await login.shouldHaveErrorMessage("Epic sadface: Sorry, this user has been locked out.");
});
