
// function delayFn(time){
//     return new Promise((resolve)=>setTimeout(resolve, time))
// }

// console.log('Promise Lecture starts now ')

// delayFn(2000).then(()=>{console.log('After 2 seconds promises resovle okay')})
// console.log("End")

function delayFn2(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num2==0){
            reject('Can not perform devision by Zero')
        }else{
            resolve(num1/num2)

        }
    })
}


delayFn2(40,0).then(result=>console.log(result)).catch(err=>console.log(err))

console.log('End')