const axios = require('axios');
const { parse } = require('node-html-parser');
const Browser = require('zombie');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data); 
    const button = dom.getElementsByTagName('input');
    
    const url = 'https://en.aqua-fish.net/fish/';

    let b = new Browser();
    b.visit(url, function() {
            b.
              pressButton('submit', function() {
                    console.log(b.html());
              });
    });
        



















    // for (let index of button) 
    // {
    //     let id;

    //     if(index.getAttribute('id') == 'searchME')
    //     {
    //         id = index.getAttribute('id');
    //         //index.click();
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