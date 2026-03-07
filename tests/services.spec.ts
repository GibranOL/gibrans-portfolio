import { test, expect } from '@playwright/test';

test.describe('Services Section Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#services');
  });

  test('Renders all 4 service cards', async ({ page }) => {
    // Wait for the section to be visible
    await expect(page.locator('#services')).toBeVisible();

    // The grid should contain 4 cards (motion.divs inside the grid container)
    // We can target them by looking for the "Let's Talk" CTA inside the cards
    // The English text is "Let's Talk" by default
    const ctas = page.locator('#services a:has-text("Let\'s Talk")');
    
    // It should find 4 CTAs, one for each card
    await expect(ctas).toHaveCount(4);
  });

  test('Service CTA scrolls to contact', async ({ page }) => {
    // Click the first CTA
    const firstCta = page.locator('#services a:has-text("Let\'s Talk")').first();
    const href = await firstCta.getAttribute('href');
    
    expect(href).toBe('#contact');
    
    await firstCta.click();
    
    // Check url hash
    expect(page.url()).toContain('#contact');
    
    // Verify contact section is visible
    await expect(page.locator('#contact')).toBeInViewport();
  });
});
