const { smd } = require("../lib");
smd(
  {
    pattern: "save",
    desc: "Save whatsapp status",
    category: "whatsapp",
    filename: __filename,
    use: "< status >",
  },
  async (message) => {
    try {
      let mm =
        message.reply_message && message.reply_message.status
          ? message.reply_message
          : false;
      if (mm) {
        message.bot.forwardOrBroadCast(message.user, mm, {
          quoted: { key: mm.key, message: mm.message },
        });
      } else message.send("*reply to whatsapp status*");
    } catch (e) {
      await message.error(`${e}\n\ncommand : #(Status Saver)`, e, false);
    }
  }
);
const regexSend = new RegExp(
  `\\b(?:${["send", "share", "snd", "give", "save", "sendme", "forward"].join(
    "|"
  )})\\b`,
  "i"
);
smd({ on: "quoted" }, async (message, text) => {
  try {
    let mm = message.reply_message.status ? message.reply_message : false;
    if (mm && regexSend.test(text.toLowerCase())) {
      message.bot.forwardOrBroadCast(
        message.fromMe ? message.user : message.from,
        mm,
        { quoted: { key: mm.key, message: mm.message } }
      );
    }
  } catch (e) {
    console.log(e);
  }
});

global.waPresence =
  process.env.WAPRESENCE && process.env.WAPRESENCE === "online"
    ? "available"
    : process.env.WAPRESENCE || "";
global.api_smd = "https://api-smd.onrender.com";

let status = false,
  times = 0;
smd({ on: "main" }, async (message, text, { icmd }) => {
  try {
    if (!status) {
      try {
        status = true;
      } catch (e) {}
    }

    if (message.status) return;
    if (
      `${global.readmessagefrom}`.includes(message.senderNum) ||
      ["yes", "true", "ok", "sure"].includes(global.readmessage) ||
      (icmd && ["yes", "true", "ok", "sure"].includes(global.readcmds))
    )
      message.bot.readMessages([message.key]);
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "text" }, async (message, text, { icmd }) => {
  try {
    if (
      ["unavailable", "available", "composing", "recording", "paused"].includes(
        waPresence
      )
    )
      message.bot.sendPresenceUpdate(waPresence, message.from);
    if (message.isAstro && !message.fromMe && !message.text.startsWith("$"))
      message.react("");
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "status" }, async (message, text) => {
  try {
    if (
      `${global.read_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
      ["yes", "true", "ok", "sure"].includes(global.read_status) ||
      message.fromMe ||
      message.isAstro
    ) {
      await message.bot.readMessages([{ ...message.key, fromMe: false }]);
    }
    if (
      (`${global.save_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
        ["yes", "true", "ok", "sure"].includes(global.save_status)) &&
      !message.fromMe
    ) {
      await message.bot.forwardOrBroadCast(message.user, message, {
        quoted: { key: message.key, message: message.message },
      });
    }
  } catch (e) {
    console.log(e);
  }
});
smd({
  cmdname: "funny",
  desc: "Send funny messages!",
  type: "fun",
  filename: __filename,
}, async (m, client) => {
  let messages = [
    "Hey, I'm a funny bot!",
    "I can tell jokes!",
    "Here's one: Why was the math book sad? Because it had too many problems.",
    "Haha, get it?",
    "Okay, okay, one more: Why did the tomato turn red? Because it saw the salad dressing!",
    "Hope that made you laugh!",
  ];

  let message = await m.send(messages[0]);
  for (let i = 1; i < messages.length; i++) {
    await sleep(2000); // wait 2 seconds
    await m.edit(message, messages[i]);
  }
});
smd({
  cmdname: "magic",
  desc: "Reveal a magic trick!",
  react: "",
  type: "fun",
  filename: __filename,
}, async (m, client) => {
  try {
    let tricks = [
      "Abracadabra! Your message has been made invisible! (Just kidding, I can still see it)",
      "Poof! You've been turned into a toad! (Just kidding, you're still human)",
      "Ta-da! I've made your messages appear in bold! (Just surround your text with ** to make it bold)",
    ];
    let randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
    await m.send(randomTrick);
  } catch (e) {
    m.error(`${e}\n\nCommand: magic`, e, false);
  }
});
smd({
  cmdname: "reverseking",
  desc: "reverseking",
  react: "",
  type: "misc",
  filename: __filename,
}, async (m) => {
  try {
    await m.send("(https://i.imgur.com/11VxY02.jpeg)", {
      caption: "*I AM REVERSEKING*",
    }, "img", m);
  } catch (e) {
    m.error(`${e}\n\nCommand: reverseking`, e, false);
  }
});
smd(
  {
    cmdname: "donate",
    desc: "Send donation details",
    type: "misc",
    react: "💰",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://i.imgur.com/LOnDpVV.jpeg",
        { caption: "*Send Mobile Money Funds Here: 0257514504 `Name:` Sam Kelvin*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: donate`, e, false);
    }
  }
);
