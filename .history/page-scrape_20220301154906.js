const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);

    const button = dom.getElementsByTagName('input');  
    //button.click();
    console.log(button);

    for (let index of button) 
    {
        let id;

        if(index.getAttribute('id') == 'searchME')
        {
            id = index.getAttribute('id');
            console.log(id);
        }


        
    }


    
    // const link = dom.querySelector('a');
    // const title = link.getAttribute('title');

    const content = dom.getElementsByTagName('a');
    const length = content.length;
    // const content = dom.getElementsByTagName('a').at(0);


    for (let index of content) 
    {
        let title;

        if(index.getAttribute('class') == 'fishFamily')
        {
            title = index.getAttribute('title');
            //console.log(title);
        }


        
    }


})();