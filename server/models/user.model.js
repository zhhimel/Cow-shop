const mongoose=require('mongoose');
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
    }
})  
const user=mongoose.model("usersdata",newSchema);
module.exports=user;