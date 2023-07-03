const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);

    const button = dom.getElementsByTagName('input');  

    for (let index of button) 
    {
        let id;

        if(index.getAttribute('id') == 'searchME')
        {
            id = index.getAttribute('id');
            button.click();
            console.log(id);
        }
    }


    
    // const link = dom.querySelector('a');
    // const title = link.getAttribute('title');
    // const content = dom.getElementsByTagName('a').at(0);
    const content = dom.getElementsByTagName('a');
    const length = content.length;
    


    for (let index of content) 
    {
        let title;

        if(index.getAttribute('id') == 'LN13_13')
        {
            title = index.getAttribute('href');
            console.log(index);
        }


        
    }


})();