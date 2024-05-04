const { test, expect } = require("@playwright/test");

test("first playwright test Flexible variant", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/");
});

test("first playwright test Convenience variant", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/");
  expect(await page.title()).toEqual(
    expect.stringContaining("Rahul Shetty Academy")
  );
});
