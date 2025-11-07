const express=require("express");
const router=express.Router();
const {handleGenerateShortUrl,gettheanalytics}=require('../controllers/url');

router.post("/",handleGenerateShortUrl);
router.get("/analytics/:shortId",gettheanalytics);
module.exports=router;