const {france}=require("../framework/france")
const {getContentType}=require("@whiskeysockets/baileys")



france({nomCom:"vv",categorie:"General",reaction:"📸"},async(dest,zk,commandeOptions)=>{

const {ms,msgRepondu,repondre}=commandeOptions;


if(!msgRepondu){return repondre("_යම් කිසිවකු දමා ඇති video හො photo වක් oneview ලෙස දමා ඇති නම් මෙම rushi bot මගින් එය නැවත whatsapp හී දැමීමට හැකිය ඒ සදහා එය mention කල යුතුය පසුව තිතක් තබා කමාන්ඩ් කල යුතුය this bot creater is rush 🇱🇰 wa.me//762498519?text=HI📸RUSH📸INEED📸BUY📸THIS📸PROJECT .vv_");}


if(msgRepondu.viewOnceMessageV2)
{
      if(msgRepondu.viewOnceMessageV2.message.imageMessage)
       {
         var image =await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.imageMessage)
        var texte = msgRepondu.viewOnceMessageV2.message.imageMessage.caption
    
     await zk.sendMessage(dest,{image:{url:image},caption:texte},{quoted:ms})
      }else if(msgRepondu.viewOnceMessageV2.message.videoMessage){

    var video = await zk.downloadAndSaveMediaMessage(msgRepondu.viewOnceMessageV2.message.videoMessage)
var texte =msgRepondu.viewOnceMessageV2.message.videoMessage.caption


await zk.sendMessage(dest,{video:{url:video},caption:texte},{quoted:ms})

}
}else
{
   return repondre("_Ap ne jis msg ko mention kia hai yeh private view once msg nahii hai")
}



})




/** 

𝗥𝗨𝗦𝗜-𝗠𝗗 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗥𝗨𝗦𝗜 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗥𝗨𝗦𝗛 
 
 **/
