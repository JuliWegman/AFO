import  express  from 'express';
import routerOficina from './src/controller/OficinaController.js'
import 'dotenv/config'
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(cors())

app.use("/oficina", routerOficina);



app.listen(process.env.PORT|| 5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE");})