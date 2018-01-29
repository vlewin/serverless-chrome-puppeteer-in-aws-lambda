// import Cdp from 'chrome-remote-interface'
//
// export default async function version () {
//   return Cdp.Version()
// }
//

import puppeteer from 'puppeteer/node6/lib/Puppeteer'

(async() => {
  const browser = await puppeteer.launch();
  console.log(await browser.version());
  await browser.close();
})();
