import { test, expect } from "@playwright/test";
import path from "node:path";

test("visual review of approved reference, homepage, and project flow", async ({
  page,
}, testInfo) => {
  test.setTimeout(60_000);
  const prefix = `test-results/visual-${testInfo.project.name}`;
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const illustration of await page.locator(".project-art img").all()) {
    await illustration.scrollIntoViewIfNeeded();
    await expect(illustration).toBeVisible();
    await expect
      .poll(() =>
        illustration.evaluate(
          (image) => (image as HTMLImageElement).naturalWidth,
        ),
      )
      .toBeGreaterThan(0);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: `${prefix}-home.png`,
    fullPage: true,
    scale: "css",
  });
  await page
    .locator("#about")
    .screenshot({ path: `${prefix}-about.png`, scale: "css" });
  await page
    .getByRole("link", {
      name: "Explore case study: Reliable Video Capture & Upload",
      exact: true,
    })
    .click();
  await page.getByRole("button", { name: "Start transfer" }).click();
  await page.getByRole("button", { name: "Simulate network failure" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.screenshot({ path: `${prefix}-upload.png`, scale: "css" });
  await page.keyboard.press("Escape");
  await page.goto("/work/warehouse-planning");
  await page.screenshot({
    path: `${prefix}-warehouse.png`,
    fullPage: true,
    scale: "css",
  });
  await page.goto(
    `file://${path.resolve("context/nikhil_portfolio_final_review.html")}`,
  );
  await page
    .locator(".reveal")
    .evaluateAll((elements) =>
      elements.forEach((element) => element.classList.add("visible")),
    );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.screenshot({
    path: `${prefix}-reference.png`,
    fullPage: true,
    scale: "css",
  });
});
