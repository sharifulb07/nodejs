
const firstmodule=require('./firstmodule')

console.log(firstmodule.add(40,85))
console.log(firstmodule.substract(58,34))
console.log(firstmodule.divide(40,5))


try {
    console.log('trying to divide by zero')
    const result=firstmodule.divide(49,0);
    console.log(result)
} catch (error) {
    console.log("Error:", error.message)
    
}

// module wrapper

(
    function(exports, module, require, __filename, __dirname){
        // module code goes on here 
    }
)