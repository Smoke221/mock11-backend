const express = require("express")
const { postModel } = require("../models/postModel")

const allRouter = express.Router()

allRouter.post("/des", async (req,res) => {
    try{
        const {name,email,destination,travellers,budgetPer} = req.body

        const post =  new postModel({name,email,destination,travellers,budgetPer})
        await post.save()

        res.status(201)
        res.send({'msg':'Post saved successfully'})
    }
    catch(error){
        res.status(500)
        res.send({'error':error.message})
    }
})

allRouter.get("/get", async(req,res) => {
    try{
        const allPosts = await postModel.find()

        res.status(200)
        res.send({'msg':'All the post by the users',"posts":allPosts})
    }
    catch(error){
        res.status(500)
        res.send({'error':error.message})
    }
})

allRouter.delete("/delete/:id", async (req,res) => {
    try{
        const userID = req.params.id
        await postModel.findByIdAndDelete({"_id":userID})

        res.status(201)
        res.send({'msg':'Deleted the post successfully'})
    }
    catch(error){
        res.status(500)
        res.send({'error':error.message})
    }
})

allRouter.get("/sort", async (req,res) => {
    try{
        const sortedData = await postModel.find()
        .sort({budgetPer: -1})

        res.send({'sorted':sortedData})
    }
    catch(error){
        res.status(500)
        res.send({'error':error.message})
    }
})

module.exports = { allRouter }