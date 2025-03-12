const express=require('express')
const path=require('path')

const app=express()

// set the view engine as ejs

app.set('view engine', 'ejs')

// set the view directory for the views

app.set('views', path.join(__dirname, 'views'))

