import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    image: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {
    versionKey: false
});


userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});


userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    if (userObject.image) {
        userObject.image = `${process.env.PUBLIC_URL}/users/${userObject.image}`;
    } else {
        userObject.image = `${process.env.PUBLIC_URL}/icons/notfound.png`;
    }
    return userObject;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function () {
    let jske = process.env.JWT_SECRET || "sde334dfssdf@##";
    let expireDate = process.env.JWT_EXPIRE || "7d";
    return jwt.sign({ id: this._id }, jske, { expiresIn: expireDate });
}


export default mongoose.model("User", userSchema);