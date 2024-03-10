const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const client = require('discord.js-selfbot-v13);
const keep_alive = require('./keep_alive.js')

const prefix = "addreact";


const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();

const token53 = 'MTIxNTY2NTAxNDUxODg0MTQ1NQ.GjQTgj.POjz8TsfPAwThDrlDAA13z_iacxoVdCXvg-2cw';
const token54 = 'MTIxNTY2NTY0OTMxODEwMTA3NA.GmKFV5.z_zWqplazsIf-01wwWd4lA18-FUOpWkcn6eGLg';
const token55 = 'MTIxNTY2NjQxNTE4MTIzODI3Mg.GRGzX8.n5GADWdAYh8ITDeioX77N3yoVOTmQX9RCcRLtg';

client53.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client53.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client53.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client53.login(token53);

client54.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client54.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client54.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client54.login(token54);

client55.on("messageCreate", (message) => {
  if (message.content.startsWith("*spam")) 
  if (message.author.id === '869229454927462400') {
    const args = message.content.slice("*spam".length).trim().split(" ");
    const text = args.slice(0, args.length - 1).join(" ");
    const amount = parseInt(args[args.length - 1]);

    if (!isNaN(amount) && text) {
      for (let i = 0; i < amount; i++) {
        message.channel.send(text);
      }
    } else {
      message.channel.send("Invalid command! Usage: *spam <text> <amount>");
    }
  }
});

client55.on('messageCreate', (message) => {
  const desiredUserID = '869229454927462400'; // The desired user ID

  if (message.content.startsWith('react') && message.author.id === desiredUserID) {
    const args = message.content.slice('react '.length).trim().split(' ');
    const emoji = args[0];
    const amount = parseInt(args[1]);

    // React to the desired number of messages
    message.channel.messages.fetch({ limit: amount })
      .then((messages) => {
        messages.forEach((msg) => {
          // React with the specified emoji
          msg.react(emoji)
            .catch(console.error);
        });
      })
      .catch(console.error);
  }
});

client55.on('messageCreate', message => {
  // Check if the message starts with 'addreact' and if the message author is you
  if (message.content.startsWith('addreact') && message.author.id === '869229454927462400') {
    const args = message.content.slice('addreact'.length).trim().split(/ +/);
    const user = message.mentions.users.first();
    const emoji = args[1];
    const amount = parseInt(args[2]);

    if (!user || !emoji || isNaN(amount)) {
      return message.reply('Please provide a valid user, emoji, and amount of messages.');
    }

    const filter = m => m.author.id === user.id;
    const collector = message.channel.createMessageCollector({ filter, time: 150000, max: amount });

    collector.on('collect', (m, col) => {
      m.react(emoji)
        .then(() => console.log(`Reacted with ${emoji}`))
        .catch(console.error);
    });

    collector.on('end', col => {
      console.log(`Collected ${col.size} messages for ${user.tag}.`);
    });
  }
});

client55.login(token55);


client.on("error", (err) => {
  console.error(err); // or your preferred logger
});

client.connect(); // Get the bot to connect to Discord
