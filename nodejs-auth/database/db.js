const mongoose=require('mongoose')


const connectToDB=async()=>{
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb is connected successfully ')
        
    } catch (error) {
        console.log('Mongodb connection is failed ')
        process.exit(1)
        
    }
}

module.exports=connectToDB;