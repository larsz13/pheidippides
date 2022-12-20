const client = require('./twitterClient.js');
const clientv1 = require('./twitterClientV1.js');
const clientAds = require('./twitterClientAds.js');

// Load the list of tweets to be scheduled from a JSON file
const tweets = require('./tweets.json');

// Iterate over the list of tweets and schedule each one
tweets.forEach((tweet) => {
  const { text, scheduled_at } = tweet;

  const as_user_id = 1600412941244932000;

  // Use the 'POST /v2/tweets' endpoint to schedule the tweet

  clientAds.post('accounts/18ce55jnna9/scheduled_tweets', { text, scheduled_at, as_user_id }, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Tweet scheduled: ${text}`);
    }
  });
  
  /*client.post('accounts/18ce55jnna9/scheduled_tweets', { text, scheduled_at, as_user_id }, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Tweet scheduled: ${text}`);
    }
  });
  client.post('tweets', { text }, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Tweet scheduled: ${text}`);
    }
  });*/
  //client.v2.tweet(text);

/*
  client.post("statuses/scheduled_tweets", {status: text, scheduled_at}, function(error, tweet, response) {
    console.log(error);
  })
  */

 /*
  clientv1.get("users/show", {
    screen_name: "PheidippidesBot"
  }, function(error, tweet, response) {
    console.log(JSON.parse(response.body, null, "\t"));
  })
*/
});