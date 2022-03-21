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



    // // another example, this time using the evaluate function to return innerText of body
    // for(let i = 0; i <= 742; i++)
    // {

    //     const moreContent = await page.evaluate((i) => document.getElementById("LN" + i + "_" + i).innerHTML);
    //     console.log(moreContent);
    // }

    const selectors = await page.$$('#searchResults > ul > li ');
    
    for(let tr of selectors){
        const trText = await page.evaluate(el => el.innerHTML, li);
        console.log(trText)
      }

    // close brower when we are done
    await browser.close();


})();

