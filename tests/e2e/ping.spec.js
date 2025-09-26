const { test, expect } = require("@playwright/test");

test("ping", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/./);
});
