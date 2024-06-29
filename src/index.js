const express = require('express')
const mongoose = require('mongoose')
const { config } = require('./config/server.config')
const cors = require('cors')
const cookieParser = require('cookie-parser')



const PORT = config.appPort
const app = express()




    ; (async () => {
        try {
            await mongoose.connect(config.dbUri)
            console.log("DB CONNECTED");
            
            app.use(cors({
                origin : process.env.CORS_ORIGIN,
                Credential : true
            }))
            app.use(express.json())
            app.use(express.urlencoded())
            app.use(cookieParser())


            app.listen(PORT, () => {
                console.log(`Server listening on port ${PORT}`);
            })
        } catch (error) {
            console.error('Error', error)
        }
    })()

























/*
import express from express;
const app = express()
(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error" , (error)=> {
        console.log(error);
        throw error
       })
       app.listen(process.env.PORT , ()=>{
          console.log(`DB is up and listening on port ${PORT}`);
       })
    } catch (error) {
        console.log("ERROR" , error);
    }
})()
   */ 