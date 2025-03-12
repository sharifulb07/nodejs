const express=require('express')

const app=express();

const requestedTimeStampLogger=(req, res, next)=>{
    const timeStamp=new Date().toISOString();
console.log(`${timeStamp} from ${req.method} to ${req.url}` )
    next()
}


app.use(requestedTimeStampLogger)


app.get('/', (req, res)=>{
    res.send("Welcome to Home Page ")
})
app.get('/products', (req, res)=>{
    res.send("Welcome to products page")
})
app.get('/about', (req, res)=>{
    res.send("Welcome to about page")
})

const port=3000
app.listen(port,(req, res)=>{
    console.log(`My server is running at ${port}`)
})