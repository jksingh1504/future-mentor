const express = require("express")
const cors = require("cors")
const errorHandler = require("./middlewares/errorHandler")
const {connectDB} = require("./config/db.connect.js")
const {jwtAuth} = require("./middlewares/expressJwt")
require("dotenv").config({path:"./config/.env"})
//setting up environment variables
const {PORT,MONGO_URI,SECRET_KEY} = process.env
const app = express()
// setting up middlewares
app.use(express.json(),cors(),jwtAuth(SECRET_KEY))
//importing routes
const userRoutes = require("./routes/userRoutes.js")
const cityRoutes = require("./routes/cityRoutes.js")
const categoryRoutes = require("./routes/categoryRoutes.js")
const serviceRoutes = require("./routes/serviceRoutes.js")
const serviceProvderRoutes = require("./routes/serviceProviderRoutes.js")

// using routes for providing services on different endpoints
app.use("/api",userRoutes.auth)
app.use("/api",cityRoutes.cityCRUD)
app.use("/api",categoryRoutes.categoryCRUD)
app.use("/api",serviceRoutes.serviceCRUD)
app.use("/api",serviceProvderRoutes.serviceProviderCRUD)

// error handler
app.use(errorHandler)

app.listen(PORT,async()=>{
    try {
        await connectDB(MONGO_URI)
        console.log("Server connected at port",PORT)
    } catch (error) {
        console.log(error)
    }
})