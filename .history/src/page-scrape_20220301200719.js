const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const x = 0;
    await page.goto('https://en.aqua-fish.net/fish/');
    await page.click('#searchME');
    await page.waitForTimeout(2000);

    const selectors = await page.$$('#searchResults > ul > li ');
    
    for(let li of selectors){
        const trText = await page.evaluate(el => el.innerText, li);
        console.log(trText)
      }

    // close brower when we are done
    await browser.close();


})();

