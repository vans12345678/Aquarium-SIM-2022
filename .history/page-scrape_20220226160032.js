const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    

    const dom = parse(data);
    const heading = dom.querySelector('h1');
    console.log(data);



})();