const mongoose = require("mongoose")
// function for connecting mongoDB
async function connectDB(MONGO_URI){
    try {
        await mongoose.connect(MONGO_URI)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connectDB}