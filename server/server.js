const express= require('express')
const app=express();

app.get("/apiAFO",async (req,res)=>{
    res.json({"oficina":{"calle":"olaya"}})

})