const express = require('express');
const app=express();

const port=8080;
app.listen(port,()=>{
    console.log("request listen");
})

// app.use((req,res)=>{
//     console.log("request recieved");
//     res.send("request recived")
// })

app.get("/home",(req,res)=>{
    res.send("you are on the home page")
})

app.get("/contact",(req,res)=>{
    res.send("my contact number is 750738063")
})

app.get("*",(req,res)=>{
    res.send("reqest doesnt exits")
})
