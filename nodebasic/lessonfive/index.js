const http=require('http');
const port=3000;
const hostname='127.0.0.1'

const server=http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'})
    res.write("<h1> Hello.  </h1>");
    res.end();
});

server.listen(3000,()=>{
    console.log(`sever is running successfuly at http://${hostname}:${port}`);

});2
