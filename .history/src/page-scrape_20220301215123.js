const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fullNameArray = [];
    const commonName = [];
    const navigationName = [];

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
      commonName[i] = String(fullNameArray[i].split(" - ", 1))  
      //console.log(commonName[i]);  

       navigationName[i] = commonName[i].toLowerCase();
       
       var space = new RegExp(/\s/);
      // var apostrophe = new RegExp(/\'/);

        // if (apostrophe.test(navigationName[i]))
        // {
        //     const nameSplit = navigationName[i].split("'");
        //     navigationName[i] = nameSplit[0] + nameSplit[1];

        // }

        navigationName[i] = navigationName[i].replace("'", "");

        // Removes white spaces and adds dashes in its place
        if (space.test(navigationName[i]))
        {
            const nameSplit2 = navigationName[i].split(" ");
            navigationName[i] = nameSplit2[0] + "-" + nameSplit2[1];
        }

        //add a one if the navigation name is repeated
        if (navigationName[i] == navigationName[i-1])
        {
            navigationName[i] = navigationName[i] + "1";
        }

        console.log(navigationName[i]);

    }

})();

