const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const mysql = require('mysql');

(async () => {

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'aquariumsim2022_db'
    });

    //initialize variables and arrays
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //initial page navigation
    await page.goto('https://aquaristsacrosscanada.com/collections/tetras');
    await page.waitForTimeout(2000);

    //scrape the fish name entries in the website
    const fishNames = await page.$$('a');

    let i = 0;
    for(let li of fishNames)
    {
        const fullNameText = await page.evaluate(el => el.innerText, li);
        console.log(fullNameText);
        i++;
    }

    console.log(fishNames);

   

    //close brower when we are done
    await browser.close();

})();

