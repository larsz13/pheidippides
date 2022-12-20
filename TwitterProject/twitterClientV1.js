const TwitterApi = require("twitter");

const client = new TwitterApi({
    consumer_key: "wEDy945PY35nZX3sg9SgM70fz",
    consumer_secret: "wUrrKN6scQQry1HO8cThX0lzz5hS958sI6P8kHrLJhgnJEbJxI",
    access_token_key: "1600412941244932101-HuEabsoQR5bwZTenFw7GlTfXnucSJy",
    access_token_secret: "J7dXV3QtY5L1vd3UGDot4nKJsBBlNDHS56LF1w4m6SXZc"
})

module.exports = client;