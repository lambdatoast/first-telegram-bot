const randomPick = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const find = (arr, text) => arr.find((s) => text === s);

const interpolate = (kv) => (str) =>
  Object.keys(kv).reduce((acc, k) => acc.replace(k, kv[k]), str);

const mapTextReaction = (f, r) => [r[0], f(r[1])];

/**
 * @param {TelegrafContext} ctx
 * @param {object} state
 * @param {object} config
 */
const makeReactions = (ctx, state, config) => {
  const text = ctx.message.text.toLowerCase();
  const { first_name, id } = ctx.message.from;
  const reactions = [];
  state[id] = state[id] || config.defaultState;

  const msgType = find(config.triggers.good, text)
    ? "good"
    : find(config.triggers.bad, text)
    ? "bad"
    : "default";

  if (msgType === "good" || msgType === "bad") {
    reactions.push(randomPick(config.reactions[msgType]));
    let newPoints = state[id].points + config.points.diff[msgType];
    reactions.push(
      mapTextReaction(
        interpolate({ FIRST_NAME: first_name, POINTS: newPoints }),
        randomPick(config.points.reactions[msgType])
      )
    );
    reactions.push(["state", id, { points: newPoints }]);
  } else if (Math.random() > 0.5) {
    reactions.push(randomPick(config.reactions.default));
  }
  return reactions;
};

module.exports = {
  makeReactions,
};
