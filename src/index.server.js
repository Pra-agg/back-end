const express = require("express");
const env = require("dotenv");
const app = express();
const jwt = require("jsonwebtoken")
const path = require("path")
const cors = require("cors")



// routes
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin/user")
const categoryRoutes = require("./routes/categories")
const productRoutes = require("./routes/product")
const cartRoutes = require("./routes/cart")

// environment variable or we can say that constants
env.config();

// mongodb  connection
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.zzg8w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("data base connected")
        })
app.use(cors())
app.use(express.json())
app.use("/public",express.static(path.join(__dirname,"uploads")))
app.use("/api",userRoutes);
app.use("/api",adminRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",cartRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`process is running on port no ${process.env.PORT}`);
})