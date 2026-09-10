import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const html = pathToFileURL(resolve(here, "card.html")).href;
const out = resolve(here, "card-raw.png");

const browser = await chromium.launch({
  args: ["--allow-file-access-from-files", "--disable-web-security"],
});
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
});
await page.goto(html, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await document.fonts.ready;
});
await new Promise((r) => setTimeout(r, 250));
await page.screenshot({ path: out, type: "png" });
await browser.close();
console.log("wrote", out);
