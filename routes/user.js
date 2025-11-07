const express=require("express");
const router=express.Router();
const {Logindetails,logthein}=require("../controllers/user");
router.post("/",Logindetails);
router.post("/login",logthein);
module.exports=router;