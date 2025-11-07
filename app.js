const http=require('http');
const app=http.createServer((req, res)=>{

    if(req.url==="/"){
        res.write("this is not fair man \n")
        res.end("Heelo")
    }
})
app.listen((5000),()=>{
    console.log("hello world man")
})