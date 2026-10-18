import { expect, test } from "@playwright/test";

const paths = [
  "warehouse-planning",
  "reliable-video-upload",
  "llm-configuration-agent",
  "jenkins-release-automation",
];

test("homepage, resume, public routes, and responsive bounds", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Building software that makes complex things simple.",
  );
  await expect(page.locator("#work > article")).toHaveCount(4);
  await expect(
    page.getByRole("heading", { name: "Selected Work", exact: true }),
  ).toBeVisible();
  const resume = await request.get("/Nikhil_Kumar_Resume.pdf");
  expect(resume.status()).toBe(200);
  expect((await resume.body()).subarray(0, 5).toString()).toBe("%PDF-");
  for (const path of paths) {
    const response = await request.get(`/work/${path}`);
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain("Synthetic data");
  }
  expect((await request.get("/work/unknown")).status()).toBe(404);
  expect(
    (await request.get("/context/CODEX_PORTFOLIO_CONTEXT_FINAL.md")).status(),
  ).toBe(404);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("project dialog closes with Escape and restores focus", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page.getByRole("link", {
    name: "Explore case study: Warehouse Planning & Picking Paths",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Warehouse Planning & Picking Paths" }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Close project details" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    dialog.getByRole("link", { name: "Open full case study" }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("button", { name: "Close project details" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("link", { name: "Open full case study" }).click();
  await expect(page).toHaveURL(/work\/warehouse-planning/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Warehouse Planning & Picking Paths",
  );
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("warehouse eligibility, removal, no-stock recovery, and recalculation", async ({
  page,
}) => {
  await page.goto("/work/warehouse-planning");
  const result = page.locator(".demo-result");
  await expect(result).toContainText("Selected B-101");
  await page
    .getByRole("combobox", { name: "Project type", exact: true })
    .selectOption("cold");
  await expect(result).toContainText("Selected B-102");
  await page
    .getByRole("button", {
      name: "Remove rack at position 11, B-102",
      exact: true,
    })
    .click();
  await expect(result).toContainText("Selected B-104");
  await page
    .getByRole("button", {
      name: "Remove rack at position 25, B-104",
      exact: true,
    })
    .click();
  await expect(result).toContainText("No eligible stocked batch");
  await page.getByRole("button", { name: "Reset layout" }).click();
  await expect(result).toContainText("Selected B-102");
  await page
    .getByRole("combobox", { name: "Pick priority", exact: true })
    .selectOption("proximity");
  await expect(result).toContainText("sample index-distance model");
  await page.getByRole("button", { name: "Recalculate route" }).click();
  await expect(result).toContainText("revision 1");
});

test("upload counts only acknowledgements through failure, retry, and reset", async ({
  page,
}) => {
  await page.goto("/work/reliable-video-upload");
  const chunks = page.locator(".chunk");
  await expect(
    page.getByRole("button", { name: "Retry remaining parts" }),
  ).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Simulate network failure" }),
  ).toBeDisabled();
  await page.getByRole("button", { name: "Start transfer" }).click();
  await expect(chunks.filter({ hasText: "ACK" })).toHaveCount(3);
  await page.getByRole("button", { name: "Simulate network failure" }).click();
  await expect(chunks.filter({ hasText: "ACK" })).toHaveCount(3);
  await expect(chunks.filter({ hasText: "FAILED" })).toHaveCount(1);
  await page.getByRole("button", { name: "Retry remaining parts" }).click();
  await expect(chunks.filter({ hasText: "ACK" })).toHaveCount(6);
  await expect(page.locator(".demo-result")).toContainText(
    "must validate them and finalize",
  );
  await expect(
    page.getByRole("button", { name: "Simulate network failure" }),
  ).toBeDisabled();
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(chunks.filter({ hasText: "ACK" })).toHaveCount(0);
});

test("configuration proposal resets stale review when request changes", async ({
  page,
}) => {
  await page.goto("/work/llm-configuration-agent");
  await page.getByRole("button", { name: "Generate sample proposal" }).click();
  await expect(page.locator(".demo-result")).toContainText(
    "demo.require_dispatch_photo",
  );
  await page.getByRole("button", { name: "Mark reviewed locally" }).click();
  await expect(page.locator(".demo-result")).toContainText("reviewed locally");
  await page.getByLabel("Illustrative warehouse request").selectOption("1");
  await expect(page.locator(".demo-result")).not.toContainText(
    "demo.require_dispatch_photo",
  );
  await page.getByRole("button", { name: "Generate sample proposal" }).click();
  await expect(page.locator(".demo-result")).toContainText(
    "human review required",
  );
  await expect(page.locator(".demo-result")).toContainText(
    "demo.require_change_approval",
  );
  await expect(page.locator(".demo-result")).toContainText(
    "No changes applied.",
  );
});

test("pipeline stages expose gate descriptions", async ({ page }) => {
  await page.goto("/work/jenkins-release-automation");
  await page.getByRole("button", { name: "02 · Quality gates" }).click();
  await expect(page.locator(".demo-result")).toContainText(
    "block failing builds",
  );
  await page.getByRole("button", { name: "04 · Production" }).click();
  await expect(page.locator(".demo-result")).toContainText("approved release");
  await expect(
    page.getByRole("button", { name: "04 · Production" }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("career tabs support arrow keys and keep formal title accurate", async ({
  page,
}) => {
  await page.goto("/");
  const lead = page.getByRole("tab", { name: /Team Lead/ });
  await lead.click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "Formal title: Senior Software Developer",
  );
  await lead.press("ArrowDown");
  await expect(
    page.getByRole("tab", { name: /Senior software development/ }),
  ).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("June 2022");
  await page.keyboard.press("End");
  await expect(page.getByRole("tabpanel")).toContainText("June–August 2021");
});

test("core content and case studies remain reachable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page
    .getByRole("link", {
      name: "Explore case study: Reliable Video Capture & Upload",
      exact: true,
    })
    .click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Reliable Video Capture & Upload",
  );
  await expect(
    page.getByRole("heading", { name: "My contribution" }),
  ).toBeVisible();
  await context.close();
});
