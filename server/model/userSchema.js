const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    gurdian_1_no:{
        type:Number,
        required:true
    },
    gurdian_2_no:{
        type:Number,
        required:true
    }
})



const User = mongoose.model('USER', userSchema);

module.exports = User;