
const EventEmitter=require('events')
const myEventEmitter=new EventEmitter();


myEventEmitter.on("greet", (name)=>{
    console.log(name)
})

myEventEmitter.emit('greet', "Shariful Islam now ")