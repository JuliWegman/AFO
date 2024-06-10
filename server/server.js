import  express  from 'express';
import cors from 'cors'
const app=express();
app.use(express.json())
app.use(cors());

app.get("/apiAFO", async (req,res)=>{
    res.json({"oficina":["calle ","olaya"]})
})


app.listen(5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE");})