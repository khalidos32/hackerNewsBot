const express = require('express');
const app = express();
const axios = require('axios');

const { bot, sendArticle } = require('./bot')

const TOP_NEWS = 'https://api.hnpwa.com/v0/news/1.json';

bot.startPolling()

app.get('/', async (req, res) => {
    console.log('herewe are')
    let promises = []
    let articles = await axios.get(TOP_NEWS).then(response=>response.data)
    articles = articles.slice(0,1)
    articles.forEach(article=>promises.push(sendArticle(article.url)))
    await Promise.all(promises).catch(err => {
        console.log(err)
    })
    return res.json({done:true})
})

app.listen(8080,()=>{
    console.log('app listening on port 80')
});