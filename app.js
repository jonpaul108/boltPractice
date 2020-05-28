const { App } = require('@slack/bolt');
const auth = require('./variable');
const catCall = require('./catPics').catCall;

const sign = auth.slackSignSecret;
const botToken = auth.botToken;

// Initializes your app with your bot token and signing secret
const app = new App({
  token: botToken,
  signingSecret: sign,
});
console.log('are we pinging?');
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    const cat = await catCall();
    console.log('catUrl: ', cat);
    try{
        await say(`Hey there <@${message.user}>! Check out this cat! ${cat}`);
    } catch (error) {
        console.log(error);
    }

  });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();