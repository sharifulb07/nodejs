// const os=require('os');
// // console.log(os.hostname);



// // info about current user 
// const user=os.userInfo();
// console.log(user);


// // method returns the system uptime in seconds 
// console.log(`The System Uptime is ${os.uptime()} seconds `)


// const currentOS={
//     name:os.type,
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),

// }

// console.log(currentOS);


// path built in module

// const path=require('path');
// console.log(path.sep);

// const filePath=path.join('/content','subfolder','text.txt');
// console.log(filePath);

// const base=path.basename(filePath);
// console.log(base);

// const absolute=path.resolve(__dirname,'content', 'subfolder','text.txt');
// console.log(absolute);


// fs module built in here 

const {readFile,writeFile}=require('fs');

readFile('./content/subfolder/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    const first=result;

    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;

        writeFile('./content/subfolder/result-async.txt', `Here is the result: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result);
        })

    })



})