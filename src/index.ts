import cron from 'node-cron';
import axios from 'axios';
require('dotenv').config();
import * as data from './data.json';

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

function getRandomElement(array: string | any[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function generate() {
  const scope = getRandomElement(Object.keys(data.Scopes));
  let sector;

  // @ts-ignore
  if (Array.isArray(data.Scopes[scope])) {
    // @ts-ignore
    sector = getRandomElement(data.Scopes[scope]);
  } else {
    // @ts-ignore
    sector = data.Scopes[scope];
  }

  const usedTechnologies = new Set();
  const technologies = [];

  while (technologies.length < 3) {
    const technology = getRandomElement(Object.keys(data.Technologies));
    if (!usedTechnologies.has(technology)) {
      usedTechnologies.add(technology);
      technologies.push(technology);
    }
  }

  const usedTechnologyFeatures = new Set();
  const technologyFeatures = [];

  for (const technology of technologies) {
    // @ts-ignore
    const technologyFeature = getRandomElement(data.Technologies[technology]);
    if (!usedTechnologyFeatures.has(technologyFeature)) {
      usedTechnologyFeatures.add(technologyFeature);
      technologyFeatures.push(technologyFeature);
    }
  }

  // console.log(`Scope: ${scope}`);
  // console.log(`Sector: ${sector}`);
  // console.log(`Technologies: ${technologies.join(', ')}`);
  // console.log(`Technology Features: ${technologyFeatures.join(', ')}`);

  let string = `Scope: ${scope}\n`;
  string += `Sector: ${sector}\n`;
  string += `Technologies: ${technologies.join(', ')}\n`;
  string += `Technology Features: ${technologyFeatures.join(', ')}\n`;

  return string;
}



cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  const fdx = generate();
  await sendMessageToDiscord(fdx);
});


