
// THIS FILE CREATES THE TWEETS. -- STEP THREE.

//Require client
const client = require('./twitterClient.js');
const fs = require('fs');  

// Create empty Array List for Tweets
let arrayList = [];
let i = 0;


// Create Tweet and Timeout before tweeting the next one.
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

// read file TWEETLIST.JSON
fs.readFile('./TwitterProject/tweetList.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // parse the data as a jason array
  arrayList = JSON.parse(data);

  sendTweet();
});
