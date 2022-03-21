const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);
    
    const link = dom.querySelector('a');
    const title = link.getAttribute('title');

    const content = dom.getElementsByTagName('li');
    // const content = dom.getElementsByTagName('a').at(0);

    var divs = dom.querySelectorAll('li');

    for (i = 0; i < content.length; ++i) 
    {
        console.log(content[i].rawAttributes);
    }
    
    //console.log(title);


})();