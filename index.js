const express = require("express")
const cors = require("cors")
const { connection } = require("./configs/db")
const { allRouter } = require("./routes/allRoutes")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send({'msg':'App is working fine'})
})

app.use("/post",allRouter)

app.listen(process.env.port, async () => {
    try{
        await connection
        console.log('Connected to db');
    }
    catch(error){
        console.log(error.message);
    }
    console.log(`App is connected to port ${process.env.port}`);
})