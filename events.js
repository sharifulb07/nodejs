// const path=require('path');
// const { posix } = require('path/posix');
// const myPath="C:/Users/Adiyat/Desktop/backend/index.js";
// console.log(path.dirname(myPath));
// console.log(path.isAbsolute(myPath));
// // console.log(path.posix)
// console.log(path.normalize(path));



// var path=require('os');
// console.log(path.homedir());
// console.log(path.cpus());
// console.log(path.freemem());

// const fs=require('fs');
// fs.writeFileSync("myFile.txt","Hello Sharif your are doing well!");
// fs.appendFileSync("myFile.txt","Hello Sharif how are you");

// const data=fs.readFile('myFile.txt', (err,data)=>{
//     console.log(data.toString());
// });
// // console.log(data.toString());

// console.log('Hello')

// const EventEmitter=require('events');
// const School = require('./school');
// // const { emit } = require('process');
// const startPeriod = require('./school');
// const emitter=new EventEmitter();

// const startPeriod=require('./school');
const School =require('./school');
const school=new School();

school.on('bellRing',({period,text})=>{
    console.log(`We need ${period} to be run here ${text}`);
})

//raise an event 

school.startPeriod();
