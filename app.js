
const eventEmitter=require("events");

const customEmitter=new eventEmitter();


customEmitter.on("response",(name, id)=>{
    console.log(`data recived user: ${name} with id ${id}`);
    
})
customEmitter.on("response",()=>{
    console.log("Some other logic here man ");
    
})

customEmitter.emit("response", "Johnathon", 35)


















// const {writeFile, readFile } = require("fs").promises;
// const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);


// const start = async () => {

//     try {
//         const second = await readFile("./content/second.txt", 'utf-8');
//         const first = await readFile("./content/first.txt", 'utf-8');

//         await writeFile("./content/resultman.txt", `This is AWESOMEeeee text ${first} ${second} `, {flag:'a'})
        
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
        
//     }

// };

// start();



// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };


// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
