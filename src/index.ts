import cron from 'node-cron';
import axios from 'axios';
import {generate} from 'idea';

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  const idea = generate();

});


const discordWebhookURL = "YOUR_WEBHOOK_URL";
const message = "Hello from JavaScript!";

async function sendMessageToDiscord() {
  try {
    const response = await axios.post(discordWebhookURL, {
      content: message,
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
  }
}

sendMessageToDiscord();