"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "🇱🇰", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*RUSi-MD* releace date 2024 jule 6, by *rush* \n\n ' + "FOLLOW MY WHATSAPP CHANNLE🇱🇰 https://whatsapp.com/channel/0029VacPdLXJ93wP6q0b962J
🇱🇰Then followe my whatsapp couminuty ⭐https://chat.whatsapp.com/IZdyenJpAxM3JB8kSboR19 🎗️devoloper by and. Powered by *RUSI-MD.*";
    let d = ' ';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f9b9d372441bc2531273b.mp4';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="🇱🇰 "
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *RUSI-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par * Rush*'
      let varmess=z+d
      var img='https://telegra.ph/file/f9b9d372441bc2531273b.mp4'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
