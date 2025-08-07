const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    }, 
    lastName : {
        type : String,
    }, 
    email: {
        type : String,
        required : true,
        unique : true,
    },
    jobTitle: {
        type : String,
    },
    gender:{
        type : String,
    },

}, {timestamps : true}) // FUnctions are to be added after the data definition.

const User = mongoose.model("User", userSchema);


module.exports = User;
