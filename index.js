const express = require('express');
const app = express();
const axios = require('axios');

const { bot, sendArticle } = require('./bot')

const TOP_NEWS = 'https://api.hnpwa.com/v0/news/1.json';

bot.startPolling()

app.get('/', async (req, res) => {
    let promises = []
    let articles = await axios.get(TOP_NEWS).then(response=>response.data)
    articles = articles.slice(0,5)
    articles.forEach(article=>promises.push(sendArticle(article.url)))
    await Promise.all(promises)
    res.json(articles)  
})

app.listen('80',()=>{
    console.log('app listening on port 80')
});