import express from "express";
import {UsuarioService} from "../service/UsuarioService.js";

const router=express.Router();
const userService=new UsuarioService();

router.get('/',async (req,res)=>{

    const {data,error}= await userService.getUsuarrios()
    if (error!=null) {
        return res.status(400).send(error)
    }else{
        return res.status(200).json(data)
    }
        
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    const {data,error}= await userService.getUsuarioById(id)
    if (error!=null) {

        return res.status(400).send(error)
    }else if(data==null){

        return res.status(404).send("ID INEXISTENTE")
    }else{

        return res.status(200).json(data)
    }
        
        
    
})

export default router;
