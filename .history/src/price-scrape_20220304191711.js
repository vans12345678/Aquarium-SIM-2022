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
    await page.goto('https://aquaristsacrosscanada.com/collections/tetra');
    await page.waitForTimeout(2000);
    
    const fishNames = await page.$$('main > div > div > div > div > div > a ');
    const fishPrices = await page.$$('main > div > div > div > div > div > span.product__price');

    let i = 0;
    let nameArrSet = [];
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
        const nameText = await page.evaluate(el => el.innerText, li);
        nameArrSet[j] = nameText;
        j++;
    }
    for(let i = 0; i < nameArrSet.length; i ++)
    {

        if(nameArrSet[i] != "")
        {
            nameArr.push(nameArrSet[i]);
        }   
    }
    for(let i = 0; i < nameArr.length; i++)
    {
        console.log(nameArr[i] + " - $" + priceArr[i]);
    }

    console.log(priceArr.length + " " + nameArr.length);

    //close brower when we are done
    await browser.close();

})();

