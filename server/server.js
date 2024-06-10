const express= require('express')
const cors = require('cors');
const app=express();

app.use(cors());

app.get("/apiAFO", async (req,res)=>{
    res.json({"oficina":["calle","olaya"]})
})


app.listen(5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE");})