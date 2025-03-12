const express=require('express')

const app=express()

// create first middleware.js at application level 

const myFirstMiddleWare=(req, res, next)=>{
    console.log("My first middle ware is running at ")
    next()
}

app.use(myFirstMiddleWare)

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
