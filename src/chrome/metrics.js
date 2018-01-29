import puppeteer from 'puppeteer'

(async() => {
  const browser = await puppeteer.launch();
  console.log(await browser.version());

  const page = await browser.newPage();
  await page.goto('https:/my-prtg.com/');
  const perf = await page.metrics();
  console.log(JSON.stringify(perf));
  await browser.close();

  return perf
})();

// const puppeteer = require('puppeteer');
//
// (async() => {
//   const browser = await puppeteer.launch();
//   console.log(await browser.version());
//
//   const page = await browser.newPage();
//   await page.goto('https:/my-prtg.com/');
//   const perf = await page.metrics();
//   console.log(JSON.stringify(perf));
//   await browser.close();
//
//   return perf
// })();
