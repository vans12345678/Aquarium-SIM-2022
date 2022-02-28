const axios = require('axios');


(async () => {
    const page = await axios.get('http://localhost:3000');    
    console.log(page);
})();