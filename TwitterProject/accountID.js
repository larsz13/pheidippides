const { TwitterApi } = require('twitter-api-v2');
const client = require('./twitterClient.js');

// Make a request to the 'GET /v2/account/verify_credentials' endpoint
client.get('/v2/account/verify_credentials', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});