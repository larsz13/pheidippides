const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
    
    appKey: "GzZtModn4ABIi1k7xtrwb2ZbH",
    appSecret: "1lnLkXPSF2VhfzXHaCTZWhm5QcDlFSFDurahb4N0t9w7oqZbEl",
    accessToken: "1600412941244932101-XyIfrvrlFkvyu1mslZc71U0J0z1fHs",
    accessSecret: "HdUzUEKMJDnQ5v8zRzQ12nTaAwdIbtiIO6LyJEKlovSCM"

})

const rwClient = client.readWrite

module.exports = rwClient
//module.exports = client;