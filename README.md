# MY FIRST TELEGRAM BOT

Silly bot that reacts to things, and gives you or takes away VERY VALUABLE NORIEGA POINTS.

## Code

1. `config.json`: Change this as pleased.
2. `./lib/make-reactions`: The rancid logic that computes reactions from the incoming msg. Silly randomness involved.
3. `./lib/run-reactions`: Actually send stuff to the telegram network.

## How to run it

1. Install node and nvm somehow.
2. Get a bot token from the BotFather dude.
3. Then do on your unix terminal:

```
export BOT_TOKEN="..."
node index.js
```

(where `...` is replaced with your token)

## TODO

1. Extend it to lauch missiles and steal all the bitcoin.
2. Persist `state` to disk. Stop losing mah points.
