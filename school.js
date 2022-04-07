
const EventEmitter=require('events');

class School extends EventEmitter{
 startPeriod(){
    console.log('Class started');

    //raise even when bell rings
    setTimeout(() => {
    
        this.emit("bellRing", {
            period:'First period',
            text:'period ended'
        });
    }, 2000);
}
}


module.exports=School;