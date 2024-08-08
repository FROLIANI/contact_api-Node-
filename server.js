//Start Development
const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");

const dotenv = require("dotenv").config()

connectDb();
const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler)

//Callback to listen
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})