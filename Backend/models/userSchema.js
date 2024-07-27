import mongoose from "mongoose";
import bcrypt from "bcrypt";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema=new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength:[5,"NIC must contain 5 digits"],
        maxLength:[5,"NIC Must be of 5 digits"]
      
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
      type:String,
      required:true,
      enum:["male","female","LGBTQIA+"]

    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password must be of 8 length"],
        select:false
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Patient"]
    },
    doctorDepartment:{
        type:String
    },
    docAvatar:{
        public_id:String,
        url:String,

    }

})

userSchema.pre("save",async function(next){
     if(!this.isModified("password")){
              next();
     }
     this.password=await bcrypt.hash(this.password,10);
});

userSchema.methonds.comparePassword=async function(enteredPassword){
   return bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.generatePassword=async function(){
    return jwt.sign({id:this.id},proccess.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE})
}

export const User=mongoose.model("User",userSchema)