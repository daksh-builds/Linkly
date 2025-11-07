const express=require("express");
const mongoose=require("mongoose");
const {connectToMongo}=require("./connect");
const app=express();
const cookieparser=require("cookie-parser");

const{checkForAuthentication,restrictTo}=require("./middleware/auth");
const path=require("path");//for ejs


const URL=require('./models/url');
//that's how you connect to mongo db;
const urlRoute=require("./routes/url");
const static=require("./routes/static");
const Userroute=require("./routes/user");

connectToMongo("mongodb://localhost:27017/short-urlss")
.then(()=>console.log("Mongodb Connected"))
.catch((err)=>{
  console.log("Error connecting mongodb");
});
//mne ejs connect or engine set kr dia 
app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));
app.use(checkForAuthentication);
const PORT=8001;


//for testing ejs
app.get("/test",async(req,res)=>{
const allUrls=await URL.find({});
return res.render("home",{
  urls:allUrls,
});
});

app.use("/myuser",Userroute);
app.use("/user",restrictTo(["NORMAL"]),urlRoute);
app.use("/",static);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now()// fixed typo
        },
      },
    }
  );

  if (!entry) return res.status(404).send("Short URL not found");

  res.redirect(entry.redirectURL);
});


app.listen(PORT,()=>console.log("server running"));
