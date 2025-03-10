const http=require('http')

const server=http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})

    res.end("Hello Node js for server Hey")
    
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is listening at port no ${port}`)
})