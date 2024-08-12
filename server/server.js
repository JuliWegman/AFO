import express         from 'express';
import routerOficina   from './src/controller/OficinaController.js'
import routerUsuarios  from './src/controller/UsuarioController.js';
import routerLocalidad from './src/controller/LocalidadController.js';
import routerMensaje   from './src/controller/MensajeController.js'
import cors            from 'cors'

import 'dotenv/config'

const app=express();
app.use(express.json())
app.use(cors())


app.use("/oficina",   routerOficina);
app.use("/usuario",   routerUsuarios);
app.use("/localidad", routerLocalidad);
app.use("/mensaje",   routerMensaje);


app.listen(process.env.PORT|| 5000,()=>{console.log("SERVER CONECTADO CORRECTAMENTE en port"+process.env.PORT);})