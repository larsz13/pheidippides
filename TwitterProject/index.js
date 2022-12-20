const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v1.tweet("I'm not done running yet. I can't wait to deliver your messages.")
    } catch (e) {
        console.error(e)
    }
}

// CronJob("s m h d m y") -> seconds, minutes, hours, day, month, year -> so this: ("0 5 * * *") means "tweet every day at 5:00" 
const job = new CronJob("* * * * *", () => {
    console.log('cron job starting!')
    tweet()
})

//DE-COMMENT THE FOLLOWING LINE TO GO LIVE ON TWITTER ACCOUNT:

//job.start();

tweet();