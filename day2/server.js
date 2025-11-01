const os = require("os");


const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem: os.freemem(),
}

console.log("Name",currentOS.name)
console.log("Release Date", currentOS.release)
console.log("Total Memory:", currentOS.totalmem)
console.log("Free Memory", currentOS.freemem)

// console.log(`The System Uptime is : ${os.uptime()}`)


// const user = os.userInfo();
// console.log(user)

// console.log(os.hostname())
// console.log(os.homedir())

// require("./mind")

// const {items, singlePerson}=require("./flaver");
// // const {person}=require("./flaver")

// for(const item of items){
//     console.log(item)
// }

// console.log(singlePerson.name)
