
function delayFn(time){
    return new Promise(resolve=>setTimeout(resolve, time))
}

async function  delayedGreet(name) {
    
    await delayFn(2000)
    console.log(name)
}

delayedGreet('Shariful Islam')


async function delay(num1, num2) {
    
    try {
        if(num2==0) throw new Error('can not divided by Zero')
            console.log(num1/num2)
            return num1/num2
    } catch (error) {
        console.log("Error", error)
        return null;
    }
}

async function mainFn() {
    await delay(11,2)
    await delay(20,2)
    await delay(20,0)
    console.log('end')
}

mainFn()