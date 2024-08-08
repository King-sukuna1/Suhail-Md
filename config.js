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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_24_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMjE4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIK1JTUkMvTVh0bkc0RzlSVmxkOThNMHVuMTIzbE9FUEpHZnFFOXY2ajFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzEzODE2MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwMDFDRjFDNUQ5Q0E2NTE0RDEwQ0FBQ0IzOUEwMkIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzEzNDI4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwVVVWY1Ezd1FvV2hid1Y1TDB5b3N3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc4ZjQ5NjM2LWE0ZDktNGFiZi05NmJlLTdiYzZiMWRhZTEzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAxODksXG4gICAgICA5OCxcbiAgICAgIDE4MSxcbiAgICAgIDEwOCxcbiAgICAgIDI5LFxuICAgICAgMjAsXG4gICAgICA0NyxcbiAgICAgIDE5OCxcbiAgICAgIDE0NixcbiAgICAgIDIxLFxuICAgICAgMzEsXG4gICAgICAxNzIsXG4gICAgICAyNixcbiAgICAgIDE0NSxcbiAgICAgIDQ4LFxuICAgICAgMjMyLFxuICAgICAgMjI4LFxuICAgICAgMjI5LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgODIsXG4gICAgICA2MSxcbiAgICAgIDEwOCxcbiAgICAgIDEyMSxcbiAgICAgIDUwLFxuICAgICAgNzcsXG4gICAgICAzNyxcbiAgICAgIDMsXG4gICAgICAyLFxuICAgICAgMjIyLFxuICAgICAgMTY2LFxuICAgICAgMTQ4LFxuICAgICAgNTEsXG4gICAgICAyMyxcbiAgICAgIDIxMCxcbiAgICAgIDYzLFxuICAgICAgMTA5LFxuICAgICAgMTc2LFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFBV05LVFNMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcxMzgxNjM0OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzc4NzI5ODAzNzkzNzo0OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwkoWS8J2QivCdkKLwnZCn8J2QoF/wnZCS8J2QrvCdkKTwnZCu8J2Qp/CdkJrgvJLgvJJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUE05cE1GRU1qaTA3VUdHQThnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZiaVRDNTBKbEVwVlBCdk5hUE5xdHQwUXlTRm81d0RBODVUajJqYnF4d1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVI3VUY4cVhSYUV4K2hnOUFpb2ZYdEMyUGU4WTE4T1NiRW5zb2hGMW1DMDRXTElYQjNFVUs2V1ArbEVOemRDSG5Icm1VODYyc0FNaXpnK2Mrbk4wQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQXZyR01YdnJvQVdiR2Q5RXZ5Rkk3SndrbDd3MTNsUXJzUzNCTVVRTWtUcnR1K2sraERia2hMZzU4VUF5SlpJQVdhR3pyMi9CZkJOOXNGdDdVazJGaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3MTM4MTYzNDo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMzQyODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFa01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVrTS5qc29uIjogIntcImtleURhdGFcIjpcIjdhK3VvNkhEa3VieXluRkVOWnl5bGoxRjBrdW5HSUFlQjlROVErSDNxY009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4Mzk2NjI5MSxcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMywxMCwxNV19LFwidGltZXN0YW1wXCI6XCIxNzIzMTM0Mjg2MjQyXCJ9Igp9"  // PUT your SESSION_ID 


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
