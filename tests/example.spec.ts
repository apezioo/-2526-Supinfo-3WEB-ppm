import { test, expect } from "@playwright/test";

test("pikachu should have an electric type", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Pokedex" }).click();
  await page.getByRole("button", { name: "Suivant" }).click();
  await page.getByRole("link", { name: "pikachu" }).click();
  await expect(page.locator("#root")).toContainText("electric");
});
