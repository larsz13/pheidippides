const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "wEDy945PY35nZX3sg9SgM70fz",
    appSecret: "wUrrKN6scQQry1HO8cThX0lzz5hS958sI6P8kHrLJhgnJEbJxI",
    accessToken: "1600412941244932101-HuEabsoQR5bwZTenFw7GlTfXnucSJy",
    accessSecret: "J7dXV3QtY5L1vd3UGDot4nKJsBBlNDHS56LF1w4m6SXZc"
})

const rwClient = client.readWrite

module.exports = rwClient