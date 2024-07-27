class errorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }

}
export const errorMiddleware=(req,res,next)=>{
    err.message=err.message||"Internal Server Error"
    err.statusCode=err.statusCode||300

    if(err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} entered`
        err=new errorHandler(message,400)
    }
    if(err.message==='JsonWebTokenError'){
        const message="Json web token is invalid"
        err=new errorHandler(message,400)

    }
    if(err.message==='TokenExpiredError'){
        const message="Json web token is expired"
        err=new errorHandler(message,400)

    }
    if(err.message==='CastError'){
        const message=`inavlid ${err.path}`
        err=new errorHandler(message,400)

    }
    
    return res.json({success:false,message:err.message})
    
}
export default errorHandler