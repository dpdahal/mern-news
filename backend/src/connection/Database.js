import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
class Database{
    static connect(){
        try{
            mongoose.connect(process.env.DB_URL).then((res)=>{
                console.log("Database connected");
            }).catch((err)=>{
                console.log(err);
            });
        }catch(err){
            console.log(err);
        }
    }
}
export default Database;