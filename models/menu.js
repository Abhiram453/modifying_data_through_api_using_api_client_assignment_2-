const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },

})
const menuItem= mongoose.model('menuschema',menuSchema)
module.exports=menuItem