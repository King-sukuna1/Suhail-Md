const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://pisax49409:sukuna@cluster0.eg71a4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/King-sukuna1/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b44c6239710466c2e81d1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347071381634";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/b44c6239710466c2e81d1.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_11_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImIvc08xaUtmbGcrUkUrMWNvblo1TVBMc2ZOanFmRWdzSE5LTXpDZlpRbVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MTM4MTYzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTM4QzkxREMyRThGQTE1MDQzMDY4Q0UwNkFFMTM3RTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDM3ODk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3MTM4MTYzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjdDMDNBRjQ4QjcyMzMzMTY2MjQ5MUM2Q0QyMzY2NTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDM3ODk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNKWEl1cTlqUnd5OXR4THZDb1FnckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWJmNjQ2ZTItMzhiZS00ZGQ2LWI3ZmEtMDk3MjFhY2Y3ZGFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDE0NCxcbiAgICAgIDI1LFxuICAgICAgMTE4LFxuICAgICAgMTg0LFxuICAgICAgMTc0LFxuICAgICAgMTQ0LFxuICAgICAgMTgxLFxuICAgICAgMTk4LFxuICAgICAgMTYsXG4gICAgICA3MyxcbiAgICAgIDE2OSxcbiAgICAgIDM4LFxuICAgICAgMTM4LFxuICAgICAgMTQ4LFxuICAgICAgMjI2LFxuICAgICAgOTQsXG4gICAgICA2LFxuICAgICAgMTI3LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDI0NyxcbiAgICAgIDE3NSxcbiAgICAgIDE2OCxcbiAgICAgIDI0MSxcbiAgICAgIDMwLFxuICAgICAgMTk3LFxuICAgICAgODMsXG4gICAgICAyNTQsXG4gICAgICAxMzAsXG4gICAgICAyMjIsXG4gICAgICAyMDYsXG4gICAgICA5OSxcbiAgICAgIDE0MSxcbiAgICAgIDExMyxcbiAgICAgIDk3LFxuICAgICAgNzUsXG4gICAgICA1MixcbiAgICAgIDY3LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjc5UVE5OTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzEzODE2MzQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3ODcyOTgwMzc5Mzc6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwkoWS4LyS4pig77iO77iO8J2WmPCdlprwnZaQ8J2WmvCdlpPwnZaG4pig77iO77iO4LyS8JKFkvCdkLrwnZGF8J2br/CdkYxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJL0cvL1VFRU1PZDdMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQ5TkZYS3lHamMxUW1rRzJjMFMwaSs2eC9hR25EcHJ0L3lwV29QdE16Z009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN2xyUDZ6M3p1a2tORHV5eWgzZEVTZWJVQmkyV3YxMXdsaVVOQ3ZHZUFXRGgrV2xxRFhZQWFrTjQyN2kzTitDZkpPMG9iOGJqRS82Tm1kUG82UGJaRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2JPVWo3c3ZEZDJod2JyNnR4NVhROEZyL1h2M3ByellNMDFLMjdRU25lM0hvSmlXK01PbERHVURTUll3MUpzNlFqSTEzQ2JheDB2dEgrbjZxVUpDRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MTM4MTYzNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQzNzg5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdaZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1pkLmpzb24iOiAie1wia2V5RGF0YVwiOlwibGNlMUxROGJrN3d6S3B1NmpnM1k0K2cyZzQ0bFFnOE5uc3RQd1F6c3U0dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzIxMTk4MzUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0Mzc4OTUxMzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒",
  packname: process.env.PACK_NAME || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ",
  botname : process.env.BOT_NAME  || "𝑲𝑰𝑵𝑮_𝑺𝑼𝑲𝑼𝑵𝑨-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𒅒༒☠︎︎𝖘𝖚𝖐𝖚𝖓𝖆☠︎︎༒𒅒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
