const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fullNameArray = [];
    const commonName = [];
    await page.goto('https://en.aqua-fish.net/fish/');
    await page.click('#searchME');
    await page.waitForTimeout(2000);

    const fishNames = await page.$$('#searchResults > ul > li ');
    let i = 0;
    for(let li of fishNames){
        const fullNameText = await page.evaluate(el => el.innerText, li);
        fullNameArray[i] = fullNameText;
        i++;
      }

    // close brower when we are done
    await browser.close();

    for(let i = 0; i < fullNameArray.length; i++)
    {
      commonName[i] = fullNameArray[i].split("-", 1)  

      console.log(commonName[i]);  
    }

})();

