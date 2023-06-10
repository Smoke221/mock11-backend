const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    travellers: Number,
    budgetPer: Number,
})

const postModel = mongoose.model("post",postSchema)
module.exports = {postModel}