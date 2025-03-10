const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder is created here");
}

const filePath = path.join(dataFolder, "example.txt");
// sync way to creating file

fs.writeFileSync(filePath, "Hello from Node file system");
console.log("example file created successfully here ");





const newFile = fs.appendFileSync(
  filePath,
  "\n This is new line added at the end of the first line here"
);
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);

const asyncFilePath=path.join(dataFolder, "async-example.txt")

fs.writeFile(asyncFilePath, "Hello from async file path", (err)=>{
    if(err) throw err;
    console.log("async file is created successfully")
    fs.readFile(asyncFilePath, "utf-8",(err, data)=>{
        if(err) throw err;
        console.log("async file is read here\n", data)
    })
    fs.appendFile(asyncFilePath, "\nAnother line is added here",(err)=>{
        if(err)throw err;
        console.log("new line is added to async file now ")
    })
})
