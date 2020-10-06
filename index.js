const { Telegraf } = require("telegraf");
const { makeReactions } = require("./lib/make-reactions");
const { runReactions } = require("./lib/run-reactions");
const config = require("./config.json");

const BOT_TOKEN = process.env.BOT_TOKEN;

// { [fromId]: { points: number } }
const state = {};

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome, fresh meat!"));
bot.help((ctx) => ctx.reply("Tell me anything"));
bot.on("text", (ctx) => {
  console.log(ctx.message);
  const reactions = makeReactions(ctx, state, config);
  runReactions(ctx, state, reactions);
  console.log("state", state);
});

bot.launch();
