//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/Reverse-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/reverse.jpg";
global.devs = "233542680612";
global.sudo = process.env.SUDO || "233542680612";
global.owner = process.env.OWNER_NUMBER || "233542680612";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/reverse.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURNNlhRRjJ3aGZ1Ync4WjNpZWdiaDBmcEk2Y3JjYTREeW5TNk9VRjdsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHNzbDZxVkhVOXNUK3JMYlNiY1Y1ekw2aENJejhKVGRxVTJJejB4UnlSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTjlBb1Y0b2M0eHFNOVJVZHhNQ3RHZk1kem5aNUJWVmU2bzVMQkp1cWwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YXhXcFNNWDhQMzV0R05GN3IxejZPT2lkVHA3clBvaUdPSCtnelRlVFE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKWENpN0tXZURrTjJRRk5nbDZTSW02NlovbFA4cmtoaU5Rc0txa1NZRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVSUGlvcHFQaFc1L0pLUmpkZzJTbWFjdlNyNjEwSWxZQUFrbzUrUzNjaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hSVW4rWitKL0ZJSTI1WjZSVElOWElJeGZFZ3lXUi9KTjZsYXM5ZUUzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWFDUEJaallZOUZlYy9RN1p1SkdmeGl0QTVqTUdoRDNVTHFqdUZXWEdYTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl5eVhZUDFhKzBMUUJQUDlNSGEvNGNLbElKaXFtZUhqZGpoMDRMalZGQXpzRWxvQk5iQWUzaDI1Q2dnZTUxQnZNMEZKSXNobUVQQWl3bm5HZTRUemdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiIrYjhBcTNnVDQ5OUZTcmNBQ0lxdnAwcFlEWVJXeDRzSG1XTmNGaUxaZHFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI0OTk0Nzg2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUYyMjAxMjMyNTVGMjIzMkY3NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyMjQwMTk2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUUXRKU3ZIVFNtZTV5OVYxTlpvVWtBIiwicGhvbmVJZCI6ImZiYTY2NTBmLTU3OTUtNGQxNi1hYzgzLTVjYjFiZWQ4NzVhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMFF3aEZtcit4b3Jtd3A2SVZCVkRidWw1WGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkpzbmFpdW51ektDanR1V3Q5b1A4RFhnQ2xNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVETEdXMTE0IiwibWUiOnsiaWQiOiIyMzMyNDk5NDc4Njg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNZeKdpO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHFsbzZnUEVMUEcvN2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT2tQT3psaVBicGpnODV1SW9yU3B6OUs3a2pKODlyd2JDemJUN3FVWGtpMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibE82Z21Cbk5YSU5wSWYwS1h6L2crSkR0ejhCeDl4ZW1hcnNWODdrdkFwY3BoRG9wUmhuY0lkbnlsRHdVaXVsMzdXZ1ZCc1ZsakxORDRKdU5QSUZkaUE9PSIsImRldmljZVNpZ25hdHVyZSI6Im00c3FNSzZiTE5ZN0V2bEFVanpwV1JOelFhSGF2b0hpYXhKaG0xWDg1T0ZZd1d2T3orM3dDZldib0VDWjRQTU9UMXRwTGd0NW5EKy92K0xtSVRyRGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzMjQ5OTQ3ODY4OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHBEenM1WWoyNlk0UE9iaUtLMHFjL1N1NUl5ZlBhOEd3czIwKzZsRjVJdCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyMjQwMTkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1PUyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSE KING",
  packname: process.env.PACK_NAME || "R E V E R S E",
  botname: process.env.BOT_NAME || "REVERSE KING",
  ownername: process.env.OWNER_NAME || "REVERSE KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
