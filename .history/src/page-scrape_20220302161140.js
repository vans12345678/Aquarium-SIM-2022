const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    //initialize variables and arrays
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const fullNameArray = [];
    const commonName = [];
    const navigationName = [];
    const fishSpecArray =[];
    const formattedSpecArray = [];

    //initial page navigation
    await page.goto('https://en.aqua-fish.net/fish/');
    await page.click('#searchME');
    await page.waitForTimeout(2000);

    //scrape the fish name entries in the website
    const fishNames = await page.$$('#searchResults > ul > li ');
    let i = 0;
    for(let li of fishNames){
        const fullNameText = await page.evaluate(el => el.innerText, li);
        fullNameArray[i] = fullNameText;
        i++;
      }

    //Loops through the array of full names and separates the common name for all the fish. Then formats the names to be
    //used in further navigation of the website 
    for(let i = 0; i < fullNameArray.length; i++)
    {
      commonName[i] = String(fullNameArray[i].split(" - ", 1))    

      //converts the fish name to all lowercase
       navigationName[i] = commonName[i].toLowerCase();


       //finds and removes name entries with the weird apostrophe
        var apostrophe = new RegExp(/’/);

        if (apostrophe.test(navigationName[i]))
        {
            const nameSplit = navigationName[i].split(apostrophe);
            navigationName[i] = nameSplit[0] + nameSplit[1];

        }

        //finds and removes name entries with standard apostrophe
        navigationName[i] = navigationName[i].replace("'", "");


        //Removes white spaces and adds dashes in its place
        var space = new RegExp(/\s/);
        
        if (space.test(navigationName[i]))
        {
            const nameSplit2 = navigationName[i].split(" ");
            navigationName[i] = nameSplit2[0];
            if(nameSplit2.length > 1)
            {
                for(let j = 1; j < nameSplit2.length; j++)
                {
                    navigationName[i] += "-" + nameSplit2[j];
                }
            }
        }

        //add a "1" at the end if the navigation name is repeated
        if (navigationName[i] == navigationName[i-1])
        {
            navigationName[i] = navigationName[i] + "1";
        }

   }
    ////////  Further navigation and scraping //////////////

    //navigation
    await page.goto('https://en.aqua-fish.net/fish/' + navigationName[0]);
    await page.waitForTimeout(50);

    //scraping 
    const fishSpecs = await page.$$('#fishProfile > #article_content > p ');
    let j = 0;
    
    for(let p of fishSpecs){
        const specText = await page.evaluate(el => el.innerText, p);
        fishSpecArray[j] = specText;
        j++;
        //console.log(specText);
        }
        
        ////////////////////Formating fish data///////////////////////////////

        //formatting scientific name
        const sNameSplit = fishSpecArray[0].split(": ", 2); 
        formattedSpecArray[0] = sNameSplit[1];

        //formatting common name
        const cNameSplit = fishSpecArray[1].split(": ", 2);
        formattedSpecArray[1] = cNameSplit[1];

        //formatting and averaging size 
        const sizeSplit = fishSpecArray[3].split(" ", 2);
        var size1 = parseInt(sizeSplit[5]);
        var size2 = parseInt(sizeSplit[7]);
        var avgSize = (size1 +size2)/2;
        formattedSpecArray[2] = avgSize;

        for (let i=1; i< formattedSpecArray.length; i++)
        {
            console.log(formattedSpecArray[i]);
        }

        

    //close brower when we are done
    await browser.close();

})();

