const mongoose=require('mongoose');
const newSchema=new mongoose.Schema({
    id:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    price:{
        type:String,
        require: true
    },
    image:{
        type:String,
        
    },
})  
const cows=mongoose.model("cowdetails",newSchema);
module.exports=cows;