const path = require('path')
require('dotenv').config();
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const mysql = require('mysql');

(async () => {

    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user:process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    //console.log(process.env.DB_HOST + "\n" + process.env.DB_USERNAME + "\n" + process.env.DB_PASSWORD + "\n" + process.env.DB_DATABASE);

    //initialize variables and arrays
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const URL = 'https://www.liveaquaria.com/category/2855/freshwater-fish-for-beginners?c=2855&s=ts&start=1&count=151';
    const storeName = "LiveAquaria";
    //initial page navigation
    await page.goto(URL);
    await page.waitForTimeout(2000);
  
    const fishCNames = await page.$$(".category-list> .category-item > .cat-scientific");
    const fishSNames = await page.$$(".category-list> .category-item > .cat-scientific");
    const fishPrices = await page.$$('.category-list> .category-item > .cat-price');

    let i = 0;
    let nameArrSet = [];
    let commonNameArr = [];
    let sciNameArr = [];
    let priceArr = [];


    //Get fish prices, put them in array
    for(let li of fishPrices)
    {
        const text = fishPrices(li)
        console.log(text);
        const priceText = await page.evaluate(el => el.innerText.split(/\s+/).join('').substring(13), li);
        priceArr[i] = priceText;
        i++;
    }
    // let j = 0;
    // //Get fish names, put them in array set
    // for(let li of fishNames)
    // {
    //     const nameText = await page.evaluate(el => el.innerText, li);
    //     nameArrSet[j] = nameText;
    //     j++;
    // }
    // //Split fish names into common name and scientific name arrays
    // var regExp = /\(([^)]+)\)/;
    // for(let i = 0; i < nameArrSet.length; i ++)
    // {

    //     if(nameArrSet[i] != "")
    //     {
    //         commonNameArr.push(nameArrSet[i].substr(0, nameArrSet[i].indexOf('(')));
    //         sciNameArr.push(regExp.exec(nameArrSet[i]));
    //     }   
    // }
    //Print out fish common name, scientific name and common name
    for(let i = 0; i < sciNameArr.length; i++)
    {       
        //There is a single record that is null.
        if(sciNameArr[i] != null && priceArr[i] != "")
        {

            sciNameArr[i][1] = sciNameArr[i][1].split(".", 1).toString().trim();

            console.log("Common Name: " + commonNameArr[i] + "\n" +
                        "Scientific Name: " + sciNameArr[i][1] + "\n" +
                        "Price: " + priceArr[i] + "\n\n");

            // let sqlInsert = "INSERT INTO tblfishstore(fishCommonName, fishScientificName, fishPrice, fishURL, fishStoreName) VALUES (?);"; 
            // let values = [commonNameArr[i], sciNameArr[i][1], priceArr[i], URL, storeName]; 

            // db.query(sqlInsert, [values], function (err, result, fields) 
            // {
            //     if (err) throw err;
            //     console.log(result);
            // });
        }       
        
    }

    // console.log(commonNameArr.length + " " + priceArr.length + " " + sciNameArr.length);

    //close brower when we are done
    await browser.close();

})();

