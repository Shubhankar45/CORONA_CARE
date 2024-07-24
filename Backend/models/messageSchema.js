import mongoose from "mongoose";
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must contain atleast 3 characters"]
    
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"First Name must contain atleast 3 characters"]
    
    },
    email:{
        type:String,
        required:true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone no must contain 10 digits"],
        maxLength:[10,"Phone No Must be of 10 digits"]
    
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Must be of 10 Characters"]
    
    }


}
    
)
export const Message=mongoose.model("Message",messageSchema)