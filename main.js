const Start = Date.now()

function someFn(){
    console.log('time:', Date.now()-Start)
    console.log('arg:', arguments)
}
Function.prototype.delay= function (ms){
    return (...arg)=>{
        setTimeout(()=>{
            this.apply(this,arg)
        },ms)
    }
}


