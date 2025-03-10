const fs=require('fs');

fs.readFile('input.txt','utf-8',(err, data)=>{
    if(err){
        console.log("erro  input reading file", err)
        return
    }
    const modifiedData=data.toUpperCase();
    fs.writeFile('output.txt', modifiedData,(err, data)=>{
        if(err){
            console.log("erro writing file", err)
            return
        }
        
fs.readFile('output.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('Error output reading file ', err)
        return
    }
    console.log('output data is : ', (data))
})
        console.log('wrting data is completed successfully here')
    })


})
