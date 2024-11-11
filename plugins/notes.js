const {
     note, 
     smd,
     prefix 
    } = require('../lib')


//---------------------------------------------------------------------------
smd({
           cmdname: "delnote",
           type: "notes",
           filename: __filename,
 fromMe:true,
           info: "Deletes note from db.",
           use: '< note id | 1 >',
       },
       async(message, match) => {
           try{
               let id = match.split(' ')[0];
               if (!id || isNaN(id)) { return message.reply(`*Provide Note ID, Example: ${prefix}delnote 1*`); }
               let res = await note.delnote(message,id)
               return await message.reply(res.msg);
           }catch(e){ await message.error(`${e}\n\ncommand: delnote`,e,) }
       }
   )
//---------------------------------------------------------------------------

smd({
   cmdname: "delallnote",
   type: "notes",
 fromMe:true,
   filename: __filename,
   info: "Deletes all notes from db."
},
async(message) => {
   try{
     let res = await note.delallnote(message)
     return await message.reply(res.msg);
   }catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,) }
}
)
//---------------------------------------------------------------------------
smd({
   cmdname: "allnote",
   type: "notes",
   filename: __filename,
 fromMe:true,
   info: "Shows list of all notes."
},
async(message,) => {
   try{
     let res = await note.allnotes(message,"all")
     return await message.reply(res.msg);
}catch(e){ await message.error(`${e}\n\ncommand: delallnotes`,e,`*Can't fetch data, Sorry!!*`) }
}
)
//---------------------------------------------------------------------------
smd({
 cmdname: "getnote",
 type: "notes",
 filename: __filename,
fromMe:true,
 info: "Shows note by id.",
 use: '< id|1|2 >',
},
async(message,match) => {
 try{
   if(!match)return await  message.reply(`*Provide Note ID, Ex: ${prefix}getnote id|1|2|..*`); 
   let res = await note.allnotes(message,match.split(" ")[0].toLowerCase().trim())
   return await message.reply(res.msg);
}catch(e){ await message.error(`${e}\n\ncommand: getnote`,e,`*Can't fetch data, Sorry!!*`) }
}
)

//---------------------------------------------------------------------------

smd({
           cmdname: "addnote",
           type: "notes",
           info: "Adds a note on db.",
 fromMe:true,
           filename: __filename,
           use: '< text >',
       },
       async( message, match,) => {
       try{                
           if (!match) return await message.reply(`*Please provide text to save in notes!*`)
           let res = await note.addnote(message,match)
           return await message.reply(res.msg);
       }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,) }
       }
   )
//---------------------------------------------------------------------------
//                  ADD NOTE  COMMANDS
//---------------------------------------------------------------------------

smd({
   cmdname: "note",
   type: "notes",
 fromMe:true,
   filename: __filename,
   info: "Shows list of all notes."
},
async(message, text,{smd}) => {
   try{                
let txt = `╭───── *『 MONGODB NOTES `ReverseKing` 』* ───◆
𖣘 Here You Can Store Notes For Later Use
𖣘 *----------|-----|-----|-----|-----|-----|---|----*
𖣘  𖣘┤  *✯░▒▓▆▅▃▂▁ ADD NEW NOTE ▁▂▃▅▆▓▒░⦿*
𖣘  𖣘✭ *Cmd :* ${prefix+smd} add 'Your Text'
𖣘  𖣘✭ *Usage :* Save Text in MongoDb Server
𖣘  ╰───────────────────◆
𖣘
𖣘  𖣘┤  *✯░▒▓▆▅▃▂▁ GET ALL NOTES ▁▂▃▅▆▓▒░⦿*
𖣘  𖣘✭ *Cmd :* ${prefix+smd} all
𖣘  𖣘✭ *Usage :* Read/Get All Saved Notes 
𖣘  ╰───────────────────◆
𖣘
𖣘  𖣘┤  *✯░▒▓▆▅▃▂▁ DELETE A NOTE ▁▂▃▅▆▓▒░⦿*
𖣘  𖣘✭ *Cmd :* ${prefix+smd} del 'note id'
𖣘  𖣘✭ *Usage :* Delete A Single Note By ID Number 
𖣘  ╰───────────────────◆
𖣘
𖣘  𖣘┤  *✯░▒▓▆▅▃▂▁ DELETE ALL NOTES ▁▂▃▅▆▓▒░⦿*
𖣘  𖣘✭ *Cmd :* ${prefix+smd} delall
𖣘  𖣘✭ *Usage :* Delete All Saved Notes 
𖣘  ╰───────────────────◆
╰━━━━━━━━━━━━━━━━━━━━━━──⊷` ; 


       if (!text) return await message.reply(txt);
       let action = text.split(' ')[0].trim().toLowerCase()

       if(action === "add"  || action === "new" ){
         let res = await note.addnote(message,text.replace("add", "").replace("new", ""))
         return await message.reply(res.msg);
       }else if(action === "all"){
         let res = await note.allnotes(message,"all")
         return await message.reply(res.msg);
       }else if(action === "delall"){
         let res = await note.delallnote(message)
         return await message.reply(res.msg);
       }else if(action === "del"){
         let id = text.split(' ')[1];
         if (!id || isNaN(id)) { return message.reply("*Uhh Please, Provide Note ID. Example: .delnote 1*"); }
         let res = await note.delnote(message,id)
         return await message.reply(res.msg);
       }else { return await message.reply(`*Invalid action provided, please follow* \n\n${txt}`) ; }

   }catch(e){ await message.error(`${e}\n\ncommand: addnote`,e,`*Can't fetch data, Sorry!*`) }
})

