import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=()=>{

    const MONGODB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ira5koe.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL,{ useNewUrlParser:true ,useUnifiedTopology: true})
    .then(()=>{
        console.log('connected to db');
    }).catch((error)=>{
        console.log(error)
    })
   

}
export default Connection

