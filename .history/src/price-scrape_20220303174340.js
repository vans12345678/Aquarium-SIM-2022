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
    
    const fishNames = await page.$$('main > div > div > div > div > div > a ');
    const fishPrices = await page.$$('main > div > div > div > div > div > span.product__price');

    let i = 0;
    let nameArr = [];
    let priceArr = [];

    for(let li of fishPrices)
    {
        const priceText = await page.evaluate(el => el.innerText.split(/\s+/).join('').substring(13), li);
        priceArr[i] = priceText;
        i++;
    }
    let j = 0;
    for(let li of fishNames)
    {
        const nameText = await page.evaluate(el => el.innerText.replace(/(\r\n|\n|\r)/gm, ""), li);
        nameArr[j] = nameText;
        j++;
    }

    

    // for(let i = 0; i < priceArr.length; i ++)
    // {
    //     console.log(priceArr[i]);
    // }
    
    for(let i = 0; i < 50; i ++)
    {
        if(i % 2 == 0)
        {
            console.log(nameArr[i]);
        }        
    }
    



   

    //close brower when we are done
    await browser.close();

})();

