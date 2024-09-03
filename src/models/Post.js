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