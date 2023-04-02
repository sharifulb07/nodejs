const fs=require('fs');
// console.log(fs.write())'
// fs.appendFile('demot.txt', "I am 34 years old  ", (error)=>{
// if(error){
//     console.log(error);
// }else{
//     console.log("successful ");
// }
// }
      
    
// )


// fs.readFile('demot.txt', 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.unlink( 'demo2.txt', (err)=>{
//      if(err){
//         console.log(err)
//     }else{
//         console.log('successful')
//     }
// })


fs.exists( 'demo2.txt', (result)=>{
     if(result){
        console.log("found")
    }else{
        console.log('not found')
    }
})
// fs.exists( 'demo2.txt', (result)=>{
//      if(result){
//         console.log("found")
//     }else{
//         console.log('not found')
//     }
// })

// fs.rename('demot.txt', 'demo2.txt', (err)=>{
//      if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
