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

    for (let index of content) 
    {
        

        if(index.getAttribute('id') == "LN" + x + "_" + x)
        {
            title = index.getAttribute('title');
            //console.log(title);
        }

        x+=1;
    }

    //console.log(li_content);

})();