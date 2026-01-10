const { chromium } = require('playwright');
const path = require('path');

async function testWebsite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];

  // Collect console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`Console error: ${msg.text()}`);
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`Page error: ${err.message}`);
  });

  // Test home page
  console.log('Testing home page...');
  const homePath = path.join(__dirname, 'out', 'index.html');
  await page.goto(`file://${homePath}`);
  
  const title = await page.title();
  console.log('Page title:', title);

  const heroExists = await page.locator('section').first().isVisible();
  console.log('Hero section visible:', heroExists);

  const poemCards = await page.locator('article').count();
  console.log('Poem cards found:', poemCards);

  // Test about page
  console.log('\nTesting about page...');
  const aboutPath = path.join(__dirname, 'out', 'about.html');
  await page.goto(`file://${aboutPath}`);
  const aboutTitle = await page.title();
  console.log('About page title:', aboutTitle);

  // Test projects page
  console.log('\nTesting projects page...');
  const projectsPath = path.join(__dirname, 'out', 'projects.html');
  await page.goto(`file://${projectsPath}`);
  const projectsTitle = await page.title();
  console.log('Projects page title:', projectsTitle);

  const projectCards = await page.locator('article').count();
  console.log('Project cards found:', projectCards);

  // Test a poem page
  console.log('\nTesting poem page...');
  const poemPath = path.join(__dirname, 'out', 'poems', '9dcc4b95f2d537aa8c3a6c7e6ecccd42_avijog.html');
  await page.goto(`file://${poemPath}`);
  const poemTitle = await page.title();
  console.log('Poem page title:', poemTitle);

  await browser.close();

  console.log('\n--- Test Results ---');
  if (errors.length === 0) {
    console.log('✓ All pages loaded successfully with no console errors!');
  } else {
    console.log(`✗ Found ${errors.length} error(s):`);
    errors.forEach((err) => console.log(`  - ${err}`));
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

testWebsite().catch(console.error);
