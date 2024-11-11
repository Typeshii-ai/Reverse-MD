//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
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
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhjUlpqNU5CVFdMLzdLL2svd25LSHIrSGRDSFVxeDNKbmpTZGxXbDRrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZJVTBicWdNbExDZzBuVW9FU2VTZUpRV0V3R0tEVFpHNVZmOUpNVXVtdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SyswZ1N5ZUlSbW1CUUNBWGtMcXEyNXdEUUlaSWxxbm91YWp2Q1cwRkZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJNFlQdld6REpoSEVPQTZIUXloMmhFKzlBWm5XQnZaTWx1SlVPTm9qakRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFPUUtHUERzTXRwSjI1Z3l6VXZwdVdRN3o4S09hdEVRNHpic3JHUnlRbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhKOE9hQno3TWE4Z3BtMEZWQVdQL1FiQWhMai9zeXBzOERoeWFTLzJxVjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5ldXN6dmhpY3dCVHplNHpESldENzVjV2QwTlpRK3lQUkRmLzZ6NDgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEJYbFhOKzk0Rkk0cXM4cGJxU3Azam1nUUFrRllJWmttbFIwM21NSmlUdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1TaTViYjE2WDA3UFluUGVYUDFiYnNNZHFwQk9ZMmowWmNmM2V3M2RBSGhKbUI3MkNmYXF6Z2VJeHV3Rmg3cHE1ZmlhWUxaTTF2bW5oUzhCa0tPdGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJhRUVxWGtKZm1ENk5uRitDNXJVcDNlN1pqaVdYMTQ2ZGpMcWQ4SERlNTVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxRTlxazBzVVRKV3JfaUpSb1VaWGNRIiwicGhvbmVJZCI6IjJlNWQ0Mjg0LTI4ZGEtNDdhNy05MDcwLTlmMzE5YTY5ZjE4OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ckp5SFhrL0dyOUVZSks3Tis5NCtSdVVhL1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2daRHc3V240R2FoSWJTQWVpQm5WWk5FV3FjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5OQkEyWE04IiwibWUiOnsiaWQiOiIyMzQ4MDIwMzUyNDgyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Y+m4Y+G4ZGO4Y+AIOGPpuGVvOGXqeOBl+GPhuGXniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWVZd2Q0REVNRy94N2tHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWduMll3MVFBMW9SZUtlNS91SS8vdGxvMFlpaklkNURsd3Rma09KSi9sUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEhWaFVXMmRnVnRTWVZIZ0tXMnlua1Y1SUdsczhCS01qL2RPYkdDQXBjeXdUWFJ5SEd6TUF0TklDYmlvY0JoQ1Z5enNTSFpYRU1NZk5iRnVHZE53Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjdPS2R0c0ZTVzZrQTNQWm5ObXgxUWZwSXVHUzlDdmx0TXZlMGw1cjVRbDNveGQxODBVWTA5eit4WGNpc1YvMTFZUjVMT0hyOTduNmJ5cWdHemlScmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAyMDM1MjQ4Mjo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldJSjltTU5VQU5hRVhpbnVmN2lQLzdaYU5HSW95SGVRNWNMWDVEaVNmNVUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzMjE4MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0s0In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
