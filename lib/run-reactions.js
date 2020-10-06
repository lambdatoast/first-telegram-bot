/**
 * @param {TelegrafContext} ctx
 * @param {object} state
 * @param {object[]} reactions
 */
const runReactions = (ctx, state, reactions) => {
  reactions.forEach((r) => {
    const reactionType = r[0];
    switch (reactionType) {
      case "text":
        ctx.reply(r[1], { parse_mode: "Markdown" });
        break;
      case "anim":
        ctx.replyWithAnimation(r[1]);
        break;
      case "state":
        state[r[1]] = r[2];
        break;
      default:
        break;
    }
  });
};

module.exports = {
  runReactions,
};
