const express = require("express");
const { signinUser, signupUser, setCowDetails, updateCowDetails, deleteCow, getCowDetails} = require("../controllers/user.controller");
const routes = express.Router();
// const multer = require('multer');
 
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../../Cows');
//     }, 
//     filename: function (req, file, cb) { 
//         cb(null, Date.now() + '-' + file.originalname);
//     },
// });
// const upload = multer({ storage: storage });
routes.post("/login", signinUser);
routes.post("/signup", signupUser);

routes.post("/cowdetails", setCowDetails);
routes.put("/cowdetails",updateCowDetails);
routes.delete("/cowdetails",deleteCow);
routes.get("/cowdetails",getCowDetails)
module.exports = routes;