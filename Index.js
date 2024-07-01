const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});

const {Discord, MessageEmbed, Client} = require('discord.js')
const client = new Client({
intents: 32767
})


client.login("MTI1NzM4NzA4OTA5NjQ3ODczMQ.GaYpt3.EzJqifdZhNhtRRAtekIGHy1e_a5koHovH46QUo");
/*

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*60);*/
// مش حلوة بس تقدر تفتحها

process.on("uncaughtException" , error => {
return;
})
process.on("unhandledRejection" , error => {
return;
})
process.on("rejectionHandled", error => {
return;
});


client.on("ready", () => {
  console.log(`${client.user.tag}`);
})
let autotax = ['1257387466420391978'];

client.on("messageCreate", message => {
  if (message.channel.type === "dm" ||
    message.author.bot) return

  if (autotax.includes(message.channel.id)) {

    var args = message.content.split(' ').slice(0).join(' ')
    if (!args) return;

    if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
    else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
    else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
    else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let tax5 = Math.floor((2.5 / 100) * args)
    let tax6 = Math.floor(tax4 + args2 * (20) / (19) + (1) - (args2))
    let tax7 = Math.floor(tax + tax5)
    let tax8 = Math.floor(tax4 + tax5)
    let tax9 = Math.floor((5 / 100) * args - args * -0)
    let tax10 = Math.floor(tax - args)
    let tax11 = Math.floor(tax9 + tax10)
    let tax12 = Math.floor(tax - tax11)


    let embed = new MessageEmbed()



      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setTimestamp()

      .setFooter({
        text: `By  : ${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`
      })

      .addFields(
        {
          name: "> **السعر بدون ضرائب :**", value: `**\`${args}\`**`
        },
        {
          name: "> **السعر مع ضرائب :**", value: `**\`${tax}\`**`
        },
        {
          name: "> **ضرائب الوسيط بدون نسبة :**", value: `**\`${tax4}\`**`
        },
        {
          name: "> **ضرائب الوسيط مع نسبة :**", value: `**\`${tax6}\`**`
        },
        {
          name: "> **نسبة الوسيط :**", value: `**\`${tax9}\`**`
        },
        {
          name: "> **تحويل بدون ضرائب :**", value: `**\`${tax12}\`**`
        })

      .setTimestamp()

    message.reply({ embeds: [embed] }).catch((err) => {
      console.log(err.message)
    });
  }
});
