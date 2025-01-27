import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    image:{
        type: String
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

},{
    versionKey: false
});


userSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});



export default mongoose.model("User", userSchema);