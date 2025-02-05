require("dotenv").config()
const express=require("express")
const app=express()
const cors=require("cors")
const PORT= process.env.PORT || 3000
app.use(express.json())
app.use(cors())

app.post("/abc",async(req,res)=>{
const data=await req.body
res.json({
    data:data
})
})

app.listen(PORT,()=>{
    console.log("server is working")
})