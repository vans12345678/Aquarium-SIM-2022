const axios = require('axios');
const { parse } = require('node-html-parser');
const Browser = require('zombie');
const $ = require('jquery');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data); 
    const button = dom.getElementsByTagName('input');
    

    const url = 'https://en.aqua-fish.net/fish/';

    for (let index of button) 
    {
        let id;

        if(index.getAttribute('id') == 'searchME')
        {
            id = index.getAttribute('id');
            $( "#searchME" ).on( "submit", function( event ) {
                event.preventDefault();
                console.log("search me clicked");
              });
            console.log(index.rawAttributes);
        }
    }

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