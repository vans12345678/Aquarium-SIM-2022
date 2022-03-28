const path = require('path')
require('dotenv').config();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const mysql = require('mysql');

(async () => {

    const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password: 'password',
        database: 'aquariumsim2022_db'
    });

    console.log(process.env.HOST + "\n" + process.env.USERNAME + "\n" + process.env.PASSWORD + "\n" + process.env.DATABASE);
    //console.log(process.env['SOCKET_PATH']);

    //initialize variables and arrays
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //initial page navigation
    await page.goto('https://aquaristsacrosscanada.com/collections/tetras');
    await page.waitForTimeout(2000);
    
    const fishNames = await page.$$('main > div > div > div > div > div > a ');
    const fishPrices = await page.$$('main > div > div > div > div > div > span.product__price');

    let i = 0;
    let nameArrSet = [];
    let commonNameArr = [];
    let sciNameArr = [];
    let priceArr = [];

    //Get fish prices, put them in array
    for(let li of fishPrices)
    {
        const priceText = await page.evaluate(el => el.innerText.split(/\s+/).join('').substring(13), li);

        priceArr[i] = priceText;
        
        i++;
    }
    let j = 0;
    //Get fish names, put them in array set
    for(let li of fishNames)
    {
        const nameText = await page.evaluate(el => el.innerText, li);
        nameArrSet[j] = nameText;
        j++;
    }
    //Split fish names into common name and scientific name arrays
    var regExp = /\(([^)]+)\)/;
    for(let i = 0; i < nameArrSet.length; i ++)
    {

        if(nameArrSet[i] != "")
        {
            commonNameArr.push(nameArrSet[i].substr(0, nameArrSet[i].indexOf('(')));
            sciNameArr.push(regExp.exec(nameArrSet[i]));
        }   
    }
    //Print out fish common name, scientific name and common name
    for(let i = 0; i < sciNameArr.length; i++)
    {
        //There is a single record that is null, record 22 price in wrong format
        if(sciNameArr[i] != null && priceArr[i] != null) 
        {
            console.log("Common Name: " + commonNameArr[i] + "\n" +
                        "Scientific Name: " + sciNameArr[i][1] + "\n" +
                        "Price: " + priceArr[i] + "\n\n");

            let sqlInsert = "INSERT INTO tbltetra(tetraCommonName, tetraScientificName, tetraPrice) VALUES (?);"; 
            let values = [commonNameArr[i], sciNameArr[i][1], priceArr[i]]; 

            db.query(sqlInsert, [values], function (err, result, fields) 
            {
                if (err) throw err;
                console.log(result);
            });
        }       
        
    }

    // console.log(commonNameArr.length + " " + priceArr.length + " " + sciNameArr.length);

    //close brower when we are done
    await browser.close();

})();

