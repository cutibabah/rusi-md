/** 

RUSI-MD
  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : RUSI 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: RUSH 
 
 **/







const { france } = require('../framework/france');
const {ajouterUtilisateurAvecWarnCount , getWarnCountByJID , resetWarnCountByJID} = require('../bdd/warn')
const s = require("../set")


france(
    {
        nomCom : 'warn',
        categorie : 'Group'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser,verifGroupe,verifAdmin , msgRepondu , auteurMsgRepondu} = commandeOptions;
if(!verifGroupe ) {repondre('මේ command එක group වලට වැඩ කරන්නෙ 📸') ; return};

if(verifAdmin || superUser) {
   if(!msgRepondu){repondre('mention කල යුතුයි'); return};
   
   if (!arg || !arg[0] || arg.join('') === '') {
    await ajouterUtilisateurAvecWarnCount(auteurMsgRepondu)
   let warn = await getWarnCountByJID(auteurMsgRepondu)
   let warnlimit = s.WARN_COUNT
   
   if( warn >= warnlimit ) { await repondre('Is member warnigs , to mene remove ');
                zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "remove")
 } else { 

    var rest = warnlimit - warn ;
     repondre(`Is member 1 warnings  :• ${rest} `)
   }
} else if ( arg[0] === 'reset') { await resetWarnCountByJID(auteurMsgRepondu) 

    repondre("Is Bande warnigs reset ")} else ( repondre('member warning  tag  mention  :• .warn reset'))
   
}  else {
    repondre(' group admins use  admin ')
}
 
   });
