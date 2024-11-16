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
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU12aTI0SzF1Z2s1Z1JlWUR0MEtoNEk0bnRPTlk5T2EyMHRibHZLZjFHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTlCRkFlV2ZrZXd6RU5DWTFyeU12MVROOE1WT29keTdScmIzOGZhSUpnUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSTVuSEhHY29NRk9sbjBQamNNWEt5cGIxdklPRnRHcXVQaS9TM1V4UkVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIVEFrVExsZkZlMFJBbm1SOVh5Unk1TWI5RGFvZC9mVWZQWG9KWmhFRER3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBanRIbWREc1BUR3p2Y1pSNzJyS1dzYktlKzE0ZlJKZmRIUXhaSjE2RW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY3bUM5UVphRlFBNlluSXFTcGV3a1hkNndibCtadkdmNmg5S1ZHMmJpeTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUMvQXM4bjhQMXA4ZXlKZWk0cFZtZHh0cW5mK3dkTzJEQnZaRU1kaFhrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWdnQnRId000UUFnbThIYUpmWXM5dG9tcUMrT0R6ZFdsQWhqajVST28xND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRLYmsvazFCTFRFR1MvcjA1ekp6Z3lubkdRdXdXTmpMRkhJb042WnBkRFB4RzVxaTdWeTdQSHJtcXk5NDY3eUlYdm04c25WMWlLZmY4R1R5SlV1akR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IndHMFUyeGZxQlgyakRyK2RQeUxHbWhzK2w3Ny9wNURsNHhlYVRXZStHSkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTQyNjgwNjEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBREE5ODhCRTQ1NDZBMjQ4QTVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzEzOTQ4NTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA4WVZ2bWZUU2VxUXgxRmhmYW9BTlEiLCJwaG9uZUlkIjoiZWQwYThiZjMtM2Q1Yy00N2IxLWE4MzMtYmZlYWI0NDlhYjY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF3NlVTTXlSTDdQeEl6aDQzdFBUL3pnamhOTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTzBxbDBORmtlbEkzWHNTdEN6eFZqOGRoekE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1lRTThBSjgiLCJtZSI6eyJpZCI6IjIzMzU0MjY4MDYxMjozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ1huY2dDRUpqNnk3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiM3Z2M21FSlhOSkt4cU1FdVlMWVljVGlJTVd6a3NPVkhSeFVmNGt3YkJRPSIsImFjY291bnRTaWduYXR1cmUiOiJGb3hTR3l4YnhkdHJvcEZRYjBISjg0VCs5akdYWW85YlFkMEU1ZnBkbzdteHB0SW42SnVQcitkdGU3OTBHSGNxUnFML1dncDdoU3hJVnNONDQ2ZEJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTUpxN0VGZ3RxbS94aXIyb1Q1Q2RtZTFibXNPYVFORlpGaXQwY3FOSmZKWGVGa2Uxd0hVK25JRThDT2VqRzFTMDYwVUxOWGp1VUVFLzFidFAvS3JkQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1NDI2ODA2MTI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXOTc3OTVoQ1Z6U1NzYWpCTG1DMkdIRTRpREZzNUxEbFIwY1ZIK0pNR3dVIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzOTQ4NTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXhOIn0="
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
