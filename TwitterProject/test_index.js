const client = require('./twitterClient.js');
const tweets = require('./tweets.json');

/*
tweets.forEach((tweet) => {
  const { text} = tweet;

  setTimeout(() => {
    client.v2.tweet({text}, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Tweet scheduled to be sent in 30 seconds: ${text}`);
      }
  });
  }, 30000);
});
*/

tweets.forEach((tweet) => {
  const { text} = tweet;

  setTimeout(tweeting, 30000, text)
  
  //tweeting function
  function tweeting(text){
    client.v2.tweet({text}, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Tweeted with timeout of ${timeOutTime}: ${text}`);
      }
    });
  }
});

  /*
  setTimeout(() => {
    client.post('v2/tweets', { text }, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Tweet scheduled to be sent in 30 seconds: ${text}`);
      }
  });
}, 30000);
});
*/

/*
// Iterate over the list of tweets and post each one with timeout
tweets.forEach((tweet) => {

  const { text, mood } = tweet;
  //const as_user_id = 1600412941244932000;

  //posting tweet after timeout
  setTimeout(tweeting, 30000, text, mood)
  
  //tweeting function
  function tweeting(text, mood ){
    client.post('/2/tweets', { text, mood }, (error, data) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Tweeted with timeout of ${timeOutTime}: ${text}`);
      }
    });
  }
});
*/

