//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME5lck0zdTZZMEtyRHlSbXdTZEVxbmt0RUdjZzdLeEI1OXJmUHRBYitVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW56SzRzejRpOE82VXFKZnJ4eTY5RlpQQVRQMjFxcDV2RVdSUnlaSXlWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVdGT1ZjbTJrVjNkdHJYcExyK3lad3d0QlF3VC8rZGQ4eDB4NTNkRTI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTDg2Nm9IZGd5bEpUeEJzTVhyeXBwR3A4ODhJSkxqVEJqZitCV1VDandRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNcC9XVm8vNW5XVVZoMVNhdkNIQW4yb1ZNbXpXcVpuQjE5ZDNYVzdMVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM4Njg0T2R2aE9mTGRNSnhwTmY5U0ZpNmFQZU0vQUxmZDBhKzhtdDg1U3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Q5RVMxbFZLeFpPRG9rQWxnUDZHUUJvV2NRd0dUcWVBSVg1d0V0UEgyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjBtSWx6dHhVTERSTkZvMG9QVFp0ekRzclM3YTRqd091RHp2d3BBM3Yxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEvZDk5aUhRMS9KQnFWZ0tMOXVTMFNCVm16Rys3QmRoSEc1NHgyRHpLTTU1M2VYRjgrWnFBdi9GZWQ0OUE4UmQ2ditVanJHWk5handIZEhoMS9tdkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJIdEVQNk1rc2ZPazEzcVNMN04vVnV1em9wd1hyeEVMbUhXUzd0ZFl3amtjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6MTB4UnRUcVQtbWZoZ0k4UG9OazRRIiwicGhvbmVJZCI6Ijk4ODAzZGM0LTk1ZGUtNGZjNy1hMTAzLWQ5MTY0NjE1YzQzNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGQTJDSy9xQ2UyMm5jbzc4MXJtRXd6TWxrZzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1lFeDcvRGtOakZjdnJBaCsxS1QrdHpyQmFrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNES1dQUkM5IiwibWUiOnsiaWQiOiI5NDc3NDA4MDA1MzoyNUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI0MDg0OTQxNzk0OTI0NDoyNUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0picXhHMFExdEMyd2dZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFKcHBhOWVyYkNNYmRiVTN6Rk02RU1mVVpIZ0lGWDZYYW80VE1zVTgwZ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpMYW5xT01NTmNPZEFTVStXK3FQdlJkanZlcXJYRUQycXIyVVM0VldJb3Zkb1ZtaFlYQWs4U2hKdEROYUYrVGIwc2IrRzBPMkJvLzR4MnUrTVI2Y0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSU0VHRHI5ZmVRMi9GbytnbzRGMGF0YUJXWUIvSlY0dEdCcWU5eG5BYWtqYWwxSnkwTEw0MDA1OUJHcmZIZ25lenZVVXpaWmtCTTdGQWJ3Y3NqalJCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MDgwMDUzOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVDYWFXdlhxMndqRzNXMU44eFRPaERIMUdSNENCVitsMnFPRXpMRlBOSU0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTkxOTg0MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFM2sifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94 77 408 0053",
  PASSWORD: 
    process.env.PASSWORD || "Umindu25#$",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
