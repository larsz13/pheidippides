const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    
    appKey: "ZpbzXX96hDmuQkPGAuQMtAlSb",
    appSecret: "oraS8fWicoNOs54ol6yXtHA1Fj9Jnd3ozhBUoVnL7HlghQ1CYS",
    accessToken: "1600412941244932101-UAwmDWFbOjaHJ3PF8eWo28FNa1gEe7",
    accessSecret: "xLi0LSrUthjAaSKwK8UTCnatSujvX9BY23KgkAmG710Lz"

})

const rwClient = client.readWrite;

module.exports = rwClient;