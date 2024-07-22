import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "CoronaCare"
    }).then(() => {
         console.log("Connected Successfully");
        
        })

        .catch((err)=>{
            console.log(`Error Occured ${err}`);
        })
}

export default dbConnection