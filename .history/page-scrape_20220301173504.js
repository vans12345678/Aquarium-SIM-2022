const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto('https://en.aqua-fish.net/fish/');
  
    // click another button
    await page.click('#searchME');


    // example: get innerHTML of an element
    //const someContent = await page.$eval('#selector', el => el.innerHTML);
  
    // // Use Promise.all to wait for two actions (navigation and click)
    // await Promise.all([
    //   page.waitForNavigation(), // wait for navigation to happen
    //   page.click('a.some-link'), // click link to cause navigation
    // ]);
  
    // another example, this time using the evaluate function to return innerText of body
    const moreContent = await page.evaluate(() => document.body.innerText);
    console.log(moreContent);
    
  
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