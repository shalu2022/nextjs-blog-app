import mongoose from "mongoose";

const {Schema} = mongoose

const UserSchema = new Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
}, {timestamps: true})

export default mongoose.model("User", UserSchema)