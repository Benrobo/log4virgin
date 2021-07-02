/**
 Creatot: Benrobo
 version: v1.0
 */

 let reset = "\x1b[0m"
 let black = "\x1b[30m"
 let red = "\x1b[31m"
 let green = "\x1b[32m"
 let yellow = "\x1b[33m"
 let blue = "\x1b[34m"
 let magenta = "\x1b[35m"
 let cyan = "\x1b[36m"
 let white = "\x1b[37m"
 
 const  log = (val, color)=>{
     if(color == "green" || color == "g"){
         return console.log(green, val , reset)
     }
     else if(color == "red" || color == "r"){
         return console.log(red, val , reset)
     }
     else if(color == "black" || color == "blc"){
         return console.log(black, val , reset)
     }
     else if(color == "yellow" || color == "y"){
         return console.log(yellow, val , reset)
     }
     else if(color == "cyan" || color == "cy"){
         return console.log(cyan, val , reset)
     }
     else if(color == "magenta" || color == "mg"){
         return console.log(magenta, val , reset)
     }
     else{
         return console.log(`${val}`)
     }
 }
 const  table = (val)=>{
     if(typeof val !== "object"){
         return console.log("Valid value must be an array or object")
     }
     else{
         return console.table(val)
     }
 }
 const  info = (val)=>{
     return console.info(val)
 }
 const  error = (val)=>{
     if(val == ""){
         return console.error("Error console must have a value")
     }
     return console.error(val)
 }
 const  count = ()=>{
     return console.count()
 }
 
 const  cls = ()=>{
     return console.clear()
 }
 
 const  debug = (val)=>{
     if(typeof val !== "object"){
         return console.log("Valid value must be an array or object")
     }
     return console.debug(red,val, reset)
 }
 
 module.exports = {
     log,
     table,
     info,
     error,
     count,
     cls,
     debug
 }