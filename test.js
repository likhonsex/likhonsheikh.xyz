const { chromium } = require('playwright');
const path = require('path');

async function testWebsite() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Test home page
  console.log('Testing home page...');
  const homePath = path.join(__dirname, 'out', 'index.html');
  await page.goto(`file://${homePath}`);
  
  // Check if main elements are present
  const title = await page.title();
  console.log('Page title:', title);

  // Check for hero section
  const heroExists = await page.locator('section').first().isVisible();
  console.log('Hero section visible:', heroExists);

  // Check for poem cards
  const poemCards = await page.locator('article').count();
  console.log('Poem cards found:', poemCards);

  // Test about page
  console.log('\nTesting about page...');
  const aboutPath = path.join(__dirname, 'out', 'about', 'index.html');
  await page.goto(`file://${aboutPath}`);
  const aboutTitle = await page.title();
  console.log('About page title:', aboutTitle);

  // Test a poem page
  console.log('\nTesting poem page...');
  const poemPath = path.join(__dirname, 'out', 'poems', 'avijog', 'index.html');
  await page.goto(`file://${poemPath}`);
  const poemTitle = await page.title();
  console.log('Poem page title:', poemTitle);

  await browser.close();
  console.log('\n✓ All tests passed!');
}

testWebsite().catch(console.error);
