const app = require('express')();
const cheerio = require('cheerio');
const axios = require('axios');

app.get('/scrape', async (req, res) => {
    try {
        let result = await axios.get('nytimes.com');
        console.log(result);
    } catch (err){
        if (err) throw err;
    }
})


app.listen(3001);