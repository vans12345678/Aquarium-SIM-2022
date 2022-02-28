const axios = require('axios');


(async () => {
    const page = await axios.get('http://localhost:3000');
    const data = page.data;    
    console.log(data);
})();