const express=require("express");
const Router=express.Router();
const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth");

Router.get('/admin/myurls',restrictTo(['ADMIN']),async(req,res)=>{
 const allUrl = await URL.find({});
  return res.render("home",{
    urls:allUrl,
  });
})


Router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
 const allUrl = await URL.find({createdBy: req.user._id});
  return res.render("home",{
    urls:allUrl,
  });

});

Router.get("/signup",(req,res)=>{
return res.render("signup");
});
Router.get("/login",(req,res)=>{
return res.render("login");
});

module.exports=Router;