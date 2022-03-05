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
    // const getATag = await page.$$('a');
    // const getInnerHTMLProperty = await getATag.getProperty('innerHTML');
    const inner_html = await page.evaluate(() => document.getElementsByClassName("product grid__item medium-up--one-third small--one-half slide-up-animation animated").innerHTML);
    console.log(inner_html);

   

    //close brower when we are done
    await browser.close();

})();

