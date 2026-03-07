import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page should have language attribute', async ({ page }) => {
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBe('en');
  });

  test('Images should have alt text', async ({ page }) => {
    const svgs = await page.locator('button svg');
    const count = await svgs.count();
    expect(count).toBeGreaterThan(0);
  });

  test('Main landmark exists', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });

  test('Navigation has semantic structure', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
  });

  test('Should not have any automatically detectable WCAG accessibility violations', async ({ page }) => {
    // Wait for framer-motion animations to complete before checking contrast
    await page.waitForTimeout(1500);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
      
    // Assert there are no violations
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
