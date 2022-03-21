const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);
    
    // const link = dom.querySelector('a');
    // const title = link.getAttribute('title');

    const content = dom.getElementsByTagName('a');
    const length = content;
    // const content = dom.getElementsByTagName('a').at(0);


    for (let x of content) 
    {
       
        if(x.getAttribute('class') == 'fishFamily')
        {
            let title = x.getAttribute('title');
        }
        

        console.log(title);
    }
    
    //console.log(content);

    


})();