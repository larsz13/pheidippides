const client = require('./twitterClient.js');

// REQUIRE FS MODULE
const fs = require('fs');  

let arrayList = [];
let i = 0;

function sendTweet() {
  if (i >= arrayList.length) {
    console.log("BREAK")
    return;
  }

  console.log(`send Tweet ${arrayList[i]}`);

  client.v2.tweet({ text: arrayList[i] }).then((data) => {
    i += 1;
    console.log("TWEETED")
    setTimeout(() => {
      sendTweet();
    }, 3000 );
  }).catch(error => {
    console.error(error);
  })
}

// READ FILE TWEETLIST.JSON
fs.readFile('./TwitterProject/tweetList.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // PARSE THE DATA AS A JSON ARRAY
  arrayList = JSON.parse(data);

  sendTweet();
});
