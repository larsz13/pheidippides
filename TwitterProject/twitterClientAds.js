const TwitterAdsAPI = require("twitter-ads");

const client = new TwitterAdsAPI({
    consumer_key: "GzZtModn4ABIi1k7xtrwb2ZbH",
    consumer_secret: "1lnLkXPSF2VhfzXHaCTZWhm5QcDlFSFDurahb4N0t9w7oqZbEl",
    access_token: "1600412941244932101-XyIfrvrlFkvyu1mslZc71U0J0z1fHs",
    access_token_secret: "HdUzUEKMJDnQ5v8zRzQ12nTaAwdIbtiIO6LyJEKlovSCM",
    sandbox: false, // defaults to true
    api_version: '11' //defaults to 2
})

module.exports = client;