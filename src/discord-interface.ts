import axios from 'axios';
require('dotenv').config();

const discordWebhookURL = process.env.DISCORD_WEBHOOK_URL;

const sendMessageToDiscord = async function (message: any) {
    try {
        // @ts-ignore
        const response = await axios.post(discordWebhookURL, {
            content: message,
        });
        console.log("Message sent successfully");
    } catch (error) {
        console.error(`Failed to send message: ${error}`);
    }
}

exports.sendMessageToDiscord = sendMessageToDiscord;