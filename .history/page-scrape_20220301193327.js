const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const x = 0;
    await page.goto('https://en.aqua-fish.net/fish/');
    await page.click('#searchME');
    await page.waitForTimeout(3000);

    // another example, this time using the evaluate function to return innerText of body
    for(let i = 0; i <= 742; i++)
    {
        elSelector(i);
        const moreContent = await page.evaluate((x) => document.getElementById("LN" + x + "_" + x).innerHTML);
        console.log(moreContent);
        //console.log(moreContent);
    }
    

    // close brower when we are done
    await browser.close();


})();

async function elSelector(x, page) {
    //Where i is the incremented value you pass

}