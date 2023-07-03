const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const x = 0;
  
    await page.goto('https://en.aqua-fish.net/fish/');
    await page.click('#searchME');
    await page.waitForTimeout(5000);

    // another example, this time using the evaluate function to return innerText of body
    for(let i = 0; i <= 742; i++)
    {
        //let x = "LN" + i + "_" + i
        //let moreContent = await page.evaluate(() => document.getElementById("LN").innerHTML);
        //let moreContent = await page.$$(() => document.getElementById("LN" + i + "_" + i).innerHTML);
        console.log(await page.$(() => document.getElementById("LN" + 0 + "_" + 0)));
    }
    

    
  
    // close brower when we are done
    await browser.close();

















    // const page = await axios.get('https://en.aqua-fish.net/fish/');
    // const data = page.data;    
    // const dom = parse(data); 
    // const button = dom.getElementsByTagName('input');
    
    // const url = 'https://en.aqua-fish.net/fish/';

    // for (let index of button) 
    // {
    //     let id;

    //     if(index.getAttribute('id') == 'searchME')
    //     {
    //         id = index.getAttribute('id');
    //         console.log(index);
    //     }
    // }

    // const content = dom.getElementsByTagName('a');
    // const length = content.length;

    // for (let index of content) 
    // {
    //     let title;

    //     if(index.getAttribute('id') == 'LN13_13')
    //     {
    //         title = index.getAttribute('href');
    //         console.log(index);
    //     } 
    // }


})();