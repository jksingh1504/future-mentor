const express = require("express")
const cors = require("cors")
const errorHandler = require("./app/middlewares/errorHandler")
const {connectDB} = require("./app/config/db.connect.js")
const {jwtAuth} = require("./app/middlewares/expressJwt")
require("dotenv").config({path:"./app/config/.env"})
//setting up environment variables
const {PORT,MONGO_URI,SECRET_KEY} = process.env
const app = express()
// setting up middlewares
app.use(express.json(),cors(),jwtAuth(SECRET_KEY))
//importing routes
const userRoutes = require("./app/routes/userRoutes.js")
const cityRoutes = require("./app/routes/cityRoutes.js")
const categoryRoutes = require("./app/routes/categoryRoutes.js")
const serviceRoutes = require("./app/routes/serviceRoutes.js")
const facilityRoutes = require("./app/routes/facilityRoutes.js")

// using routes for providing services on different endpoints
app.use("/api",userRoutes.auth)
app.use("/api",cityRoutes.cityCRUD)
app.use("/api",categoryRoutes.categoryCRUD)
app.use("/api",serviceRoutes.serviceCRUD)
app.use("/api",facilityRoutes.facilityCRUD)

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