const http=require('http');
const port=3000;
const hostname='127.0.0.1'

const server=http.createServer((req,res)=>{
    res.end("Hello. I am your first my server");
});

server.listen(3000,()=>{
    console.log(`sever is running successfuly at http://${hostname}:${port}`);

});