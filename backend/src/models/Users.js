import mongoose from "mongoose";

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
        type: Enum,
        required: true,
        enum: ["male", "female"]
    },
    image:{
        type: String
    },
    role:{
        type: Enum,
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

});


export default mongoose.model("User", userSchema);