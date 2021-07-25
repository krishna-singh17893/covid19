//=======================================================importing packages=============================================================
const express = require('express');
const request = require('request');
const ejs = require('ejs');
const path = require('path');

//=======================================================initialising express app=======================================================
const app = express();


//========================================================setting up port for server========================================================
const PORT = process.env.PORT || 5000;

//========================================================setting up template engine ejs====================================================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//================================================================managing routes============================================================
app.get("/",(req,res)=>{
    console.log("Index page served.");
    res.render("index");
});


//------------------------------------------------------------global page route--------------------------------------------------------------------
app.get("/global",(req,res)=>{
    console.log("Global page served.");
    res.render("global");
});

//--------------------------------------------------------------info page route--------------------------------------------------------------------
app.get("/info",(req,res)=>{
    console.log("Info page served");
    res.render("info");
});

//-------------------------------------------------------------------testing----------------------------------------------------------------------
app.get("/vaccine",(req,res)=>{
    console.log("Vaccine page served.");
    //res.sendFile(path.join(__dirname,"public","test.html"));
    res.render("vaccine");

});

//================================================================Server is Listening==============================================================
app.listen(PORT, () => {
    console.log('App is live now...');
});