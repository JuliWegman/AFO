import express from "express";
import { MensajeService } from "../service/MensajeService.js";

const router=express.Router();
const menService=new MensajeService();

router.post('/',async(req,res)=>{
    const mensaje={
        id_enviador:req.body.id_enviador,
        id_receptor:req.body.id_receptor,
        contenido:req.body.contenido,
        mail:req.body.mail,
        telefono:req.body.telefono,
        leido:false,
        fecha:req.body.fecha
    }
    
    if(req.body.id_enviador==null || req.body.id_receptor==null || req.body.contenido==null || req.body.mail==null || req.body.telefono==null ){
        return res.status(401).send("FALTAN DATOS")
    }

    const error=await menService.InsertMensaje(mensaje)

    if (error!=null) {
    return res.status(400).send(error)
    }else{
    return res.status(200).send("insertado")
    }

});

router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const {data,error}=await menService.getMensajesByUser(id)

    if (error!=null) {
        return res.status(400).send(error)
        }else{
        return res.status(200).send(data)
        }
});

export default router;
