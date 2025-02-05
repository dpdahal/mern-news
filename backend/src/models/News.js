import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    metaTitle:{
        type:String
    },
    metaDescription:{
        type:String
    }

});
export default mongoose.model("News", newsSchema);