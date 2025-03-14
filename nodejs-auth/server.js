require("dotenv").config();

const express = require("express");
const app = express();
const authRoutes=require('./routes/auth-routes')
const homeRoute=require('./routes/home-routes')
const connectToDB=require('./database/db')

const PORT=process.env.PORT || 3000


// middleware -> express.json()

app.use(express.json());

app.use('/api/auth', authRoutes)

app.use('/api/home', homeRoute)

//  build connection with mongodb 
connectToDB()

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
