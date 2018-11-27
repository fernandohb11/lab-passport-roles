const mongoose = require("mongoose")
const express = require ("express")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema= new Schema({

    username: String,
    role: {
        type:String,
        enum: ["BOSS","DEVELOPER", "TA"],
        edad:Number,
        email:String
    }
    },{
        timestamps:{
            createdAt:true,
            updatedAt:true
        }
    

})

userSchema.plugin(passportLocalMongoose,{usernameField: "username"})

module.exports=mongoose.model("User",userSchema)

