const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('http://localhost:3000');
    const data = page.data;    
    console.log(data);

    const dom = parse(data);
    const heading = dom.querySelector('h1');
    console.log(heading.text);



})();