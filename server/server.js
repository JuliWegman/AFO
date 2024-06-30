import  express  from 'express';
import routerOficina from './src/controller/OficinaController.js'
import routerUsuarios from './src/controller/UsuarioController.js';
import 'dotenv/config'
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(cors())

app.use("/oficina", routerOficina);
app.use("/usuario",routerUsuarios)

app.listen(process.env.PORT|| 5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE");})