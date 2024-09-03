const mongoose = require("mongoose")
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully")
    }catch(err){
        console.log(`mongodb error: ${err}`)
    }
}

export default connect;