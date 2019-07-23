const Telegraf = require("telegraf");
const CHANNEL_ID = '-1001456963394';

let bot = new Telegraf(
    process.env.TELEGRAM_BOT_TOKEN ||
      "780997417:AAH_3YCAtA2g4crcXYjjgUAM6rB8Md4561k"
  );


bot.telegram.getMe().then(bot_informations => {
  bot.options.username = bot_informations.username;
  console.log("Telegram bot initialized. Nick: " + bot_informations.username);
});
 


const sendArticle = url => bot.telegram.sendMessage(CHANNEL_ID,url)

module.exports = {bot,sendArticle};
