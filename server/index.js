import express from "express"
import Connection from "./db/data.js"
import cors from 'cors'
import mongoose from "mongoose"


const app=express()

const PORT=process.env.PORT||4000
Connection()

app.listen(PORT,()=>console.log(`app running on ${PORT}`))