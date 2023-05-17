const mongoose = require('mongoose')

const  UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created_at:{
         type: Date,
         required: true, 
         default: Date.now 
    }
})
var User = mongoose.model('User', UserSchema)
module.exports =  { User }