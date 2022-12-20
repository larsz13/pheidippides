const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    
    appKey: "GzZtModn4ABIi1k7xtrwb2ZbH",
    appSecret: "1lnLkXPSF2VhfzXHaCTZWhm5QcDlFSFDurahb4N0t9w7oqZbEl",
    accessToken: "1600412941244932101-XyIfrvrlFkvyu1mslZc71U0J0z1fHs",
    accessSecret: "HdUzUEKMJDnQ5v8zRzQ12nTaAwdIbtiIO6LyJEKlovSCM"

    /*
    appKey: "wEDy945PY35nZX3sg9SgM70fz",
    appSecret: "wUrrKN6scQQry1HO8cThX0lzz5hS958sI6P8kHrLJhgnJEbJxI",
    accessToken: "1600412941244932101-HuEabsoQR5bwZTenFw7GlTfXnucSJy",
    accessSecret: "J7dXV3QtY5L1vd3UGDot4nKJsBBlNDHS56LF1w4m6SXZc"
    
    consumer_key: "wEDy945PY35nZX3sg9SgM70fz",
    consumer_secret: "wUrrKN6scQQry1HO8cThX0lzz5hS958sI6P8kHrLJhgnJEbJxI",
    access_token_key: "1600412941244932101-HuEabsoQR5bwZTenFw7GlTfXnucSJy",
    access_token_secret: "J7dXV3QtY5L1vd3UGDot4nKJsBBlNDHS56LF1w4m6SXZc"
    */

})

const rwClient = client.readWrite

module.exports = rwClient
//module.exports = client;