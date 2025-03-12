
const EventEmitter=require('events')

class CustomEventEmitter extends EventEmitter{
    constructor(){
        super()
        this.greeting="Hello"
    }

    greet(name){
        console.log(`${this.greeting} ${name}`)
    }
}

CustomEventEmitter.on('greet',(input)=>{
console.log("Ended is now ", input)
})

CustomEventEmitter.greet("This shariful islam")