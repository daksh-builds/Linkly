const User=require("../models/user");
const {v4: uuid}=require("uuid");
const{setUser}=require("../service/auth");
 
async function Logindetails(req,res){
const {name,email,password}=req.body;
await User.create({
  name,email,password,
});
return res.redirect("/");
}

async function logthein(req,res){
const {email,password}=req.body;
 const user = await User.findOne({
  email,password,
});
if(!user)return res.render('login',{
  error:"Invalid user name or password",
});

const sessionid=uuid();

 const token =setUser(user);
res.cookie("token",token);

return res.redirect("/");
}

module.exports={
  Logindetails,logthein,
};