const axios = require('axios');
const { parse } = require('node-html-parser');

(async () => {
    const page = await axios.get('https://en.aqua-fish.net/fish/');
    const data = page.data;    
    const dom = parse(data);
    
    // const link = dom.querySelector('a');
    // const title = link.getAttribute('title');

    const content = dom.getElementsByTagName('a');
    const li_content = dom.getElementsByTagName('li');
    const length = content.length;
    // const content = dom.getElementsByTagName('a').at(0);


    let x = 0;

    for (let index of li_content) 
    {
        

        //if(index.getAttribute('id') == "LN_0_0")
        // {
        //     title = index.getAttribute('title');
        //     console.log(index);
        // }

        // x+=1;
        console.log(index);
    }

    //console.log(li_content);

})();