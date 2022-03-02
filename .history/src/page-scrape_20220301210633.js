const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fullNameArray = [];
    const commonName = [];
    var navigationName = [];

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

    //Loops through the array of full names and separates the common name for all the fish 
    for(let i = 0; i < fullNameArray.length; i++)
    {
      commonName[i] = fullNameArray[i].split(" - ", 1)  
      //console.log(commonName[i]);  

       navigationName[i] = commonName[i];
       
       var space = new RegExp(/\s/);

    //     if (navigationName[i].indexOf("'")>-1)
    //     {
    //         const nameSplit = navigationName[i].split("'");
    //         navigationName[i] = nameSplit[1] + nameSplit[2];

    //     }

        if (space.test(navigationName[i]))
        {
            const nameSplit2 = navigationName[i].split(" ", 2);
            navigationName[i] = nameSplit2[1] + "-" + nameSplit2[2];
            console.log(commonName[i]);
        }


    }

})();

