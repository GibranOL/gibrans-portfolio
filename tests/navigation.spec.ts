import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Navbar links scroll to correct sections', async ({ page, isMobile }) => {
    // Skip this particular test on mobile, as we have a dedicated mobile test
    if (isMobile) return;

    // Check About Link (Desktop)
    await page.click('.md\\:flex a:has-text("About")');
    await expect(page.locator('#about')).toBeInViewport();
    
    // Check Services Link
    await page.click('.md\\:flex a:has-text("Services")');
    await expect(page.locator('#services')).toBeInViewport();

    // Check Projects Link
    await page.click('.md\\:flex a:has-text("Projects")');
    await expect(page.locator('#projects')).toBeInViewport();

    // Check Contact Link
    await page.click('.md\\:flex a:has-text("Contact")');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('Mobile menu opens and links work', async ({ page, isMobile }) => {
    if (!isMobile) return;

    // Open Menu - look for the menu button specifically inside the mobile section
    await page.click('.md\\:hidden button:has(svg.lucide-menu)');
    
    // Wait for the menu to animate open
    await page.waitForTimeout(500); 

    // Click first link (Home/About) by order since text might be uppercase/translated
    // The menu container has links
    await page.click('.md\\:hidden a[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();
  });
});
