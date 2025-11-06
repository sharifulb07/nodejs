
const {readFileSync, writeFileSync}=require('fs');
const path=require('path');


const first=readFileSync(path.join(__dirname, "content", "first.txt"), "utf8");
const second=readFileSync(path.join(__dirname, "content", "second.txt"), "utf8");


// console.log(first,  second)

writeFileSync(path.join(__dirname,"content","result.txt"), `${first}\n ${second}`, {flag:"a"});
// console.log(result);



// const path = require("path");

// const filePath = path.join("/content/", "subfolder/", "test.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "/content/", "subfolder/", "test.txt");
// console.log(absolute);
