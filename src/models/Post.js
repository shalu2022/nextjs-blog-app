import mongoose from "mongoose";
const {Schema} = mongoose;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    author:{
        type: String,
        requiresd: true
    },
    image:{
        type:String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, {timestamps: true})

// if post collection is not there, create new one
export default mongoose.models.Post || mongoose.model("Post", postSchema);
