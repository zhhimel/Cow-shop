
const user = require("../models/user.model");
const cows=require("../models/cows.model")
const multer = require('multer');
const signinUser = async (req, res) => {
    const { email, password } = req.body;
    const data = {
        email: email,
        password: password
    }
    try{
        const check = await user.findOne({ email: email })
        if (check&&check.password===data.password) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (err) {
        res.json("fail");
    }
}
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    const data = {
        email: email,
        password: password
    }
    
    try {
        const check = await user.findOne({ email: email })
        if (check){
            res.json("exist")
        }
        else {
            res.json("notexist");
            await user.insertMany([data]);
        }
    }
    catch (err) {
        res.send(err);
    }
}
const setCowDetails=async(req,res)=>{
    const {id,name,price,cowimage}=req.body;
    //const image=req.file.filename;
    const data={
        id:id, 
        name:name,
        price:price ,
        image: cowimage
    }
    try{
        const check = await cows.findOne({ id: id })
        if (check) {
            res.json("exist") 
        }
        else {
            res.json("notexist");
            await cows.insertMany([data]);
        }
    }
    catch(err){
        res.json("fd");
    }
}
const updateCowDetails=async(req,res)=>{
    const {id,name,price,cowimage}=req.body;
    //const image=req.file.filename;
    const updateCow={
        id:id, 
        name:name,
        price:price,
        image: cowimage
    }
    try{
        const updatedCow = await cows.findOneAndUpdate({ id: id }, updateCow, { new: true });
        if (updatedCow) {
            res.json("exist") 
        }
        else {
            res.json("notexist");
        }
    }
    catch(err){
        res.json("Error");
    }
}
const deleteCow = async (req, res) => {
    const id = req.query.id;
    console.log("e")
    try {
        const deletedCow = await cows.deleteOne({ id: id });
        if (deletedCow.deletedCount>0) {
            res.json("deleted");
        }
        else {
            res.json("Error");
        }
    }
    catch (err) {
        res.json(err);
    }
}
const getCowDetails = async (req, res) => { 
    try {
        const cow=await cows.find();    
        res.json(cow);
    }
    catch (err) {
        res.json(err); 
    }
}

module.exports = { signinUser, signupUser,setCowDetails,updateCowDetails, deleteCow,getCowDetails }
