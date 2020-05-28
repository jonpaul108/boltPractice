const axios = require('axios');
const catKey = require('./variable.js').catAPIKey;

async function catCall() {
        let cat = '';
        try{
            axios.defaults.headers.common['x-api-key'] = catKey; 

            let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ); 
            
            this.image = response.data[0];

            console.log("-- Image from TheCatAPI.com");
            console.log("id:", this.image.id);
            console.log("url:", this.image.url);
            cat = this.image.url;

        }catch(err){
            console.log(err);
        }
        return cat;
}

module.exports.catCall = catCall;
