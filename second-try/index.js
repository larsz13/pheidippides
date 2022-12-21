const client = require('./twitterClient.js');
const tweets = require('./tweets.json');


let i = 0;

function sendTweet() {
  if (i >= tweets.length) {
    return;
  }

  const { text } = tweets[i];
  client.v2.tweet({ text }, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Tweeted: ${text}`);
      i += 1;
      setTimeout(sendTweet, 30000 );
    }
  });
}

sendTweet();