const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);

    const link = dom.querySelector('a');
    const title = link.getAttribute('title');

    const content = dom.getElementsByTagName('a');
    // const content = dom.getElementsByTagName('a').at(0);
    
    console.log(content);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }


})();