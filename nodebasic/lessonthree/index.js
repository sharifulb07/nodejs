// os, path
// const {totalmem,freemem}=require('os');

// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(totalmem());
// console.log(freemem());__


const path=require('path');
// const extensionName=path.extname("index.html");
// console.log(__dirname)
// console.log(__filename)
// const extensionName=path.extensionName("index.html");
const joinName=path.join(__dirname+"/../views")

console.log(joinName)