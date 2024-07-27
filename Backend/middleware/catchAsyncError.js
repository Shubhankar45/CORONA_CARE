export const catchAsyncErrors=(theAsyncFunction)=>{
    return(req,res,next)=>{
        Promise.resolve(theAsyncFunction(req,res,next)).catch(next)
    }
}