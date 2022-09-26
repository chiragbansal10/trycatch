/*console.log("At start")
try{
setTimeout(()=>{
    console.log("Hey catch are u there to help me")
a
},3000)
}
catch(err)
{
console.log("I found the erro")
}
console.log("At end")*/

console.log("at start")
setTimeout(()=>{
    try{
        console.log("Hey catch are u there to help me")
        a
    }
    catch(err){
        console.log("Some error is there")
    }
},3000)
console.log("at end")