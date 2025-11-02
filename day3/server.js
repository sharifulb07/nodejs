
const {readFileSync, writeFileSync}=require('fs');

const first=readFileSync("/content/first.txt", "utf8");
const second=readFileSync("/content/second.txt", "utf8");

console.log(first,  second)



// const path = require("path");

// const filePath = path.join("/content/", "subfolder/", "test.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "/content/", "subfolder/", "test.txt");
// console.log(absolute);
