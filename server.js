const express = require("express");
const path = require("path");
// const tgInfo = require("./secretKey");
require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");

const app = express();
const botToken = process.env.BOT_TOKEN || null;
const chatId = process.env.CHAT_ID || null;
const PORT = process.env.PORT || 8080;
// const bot = new TelegramApi(tgInfo.botToken, { polling: true });
const bot = new TelegramApi(botToken, { polling: true });

bot.on("invoice", (msg) => {
  console.log(msg);
});

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/*", (req, res) => {
  console.log(__dirname);
  res.sendFile(`${__dirname}/build/index.html`);
});

app.post("/submit", (req, res) => {
  const form = req.body;
  bot.sendMessage(
    chatId,
    `
  *НОВАЯ ЗАЯВКА!*\n\n\n*ИМЯ КЛИЕНТА:* ${form.name}\n\n*ТЕЛЕФОН*: ${form.phone}\n\n*ОСТАВЛЕННОЕ СООБЩЕНИЕ: *${form.message}\n\n*НАЗВАНИЕ ПРОДУКТА: *${form.product}\n
  `,
    {
      parse_mode: "Markdown",
    }
  );
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Application listening on port ${process.env.PORT || 8080}!`);
});
