import cron from 'node-cron';
const {generate} =  require('./idea.js');
const {sendMessageToDiscord} = require('./discord-interface');

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);
  const idea = generate();
  await sendMessageToDiscord(idea);
});

