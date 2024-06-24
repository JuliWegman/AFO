import express from "express";
import {UsuarioService} from "../service/UsuarioService.js";

const router=express.Router();
const userService=new UsuarioService();

router.get('/',async (req,res)=>{
    try {
        const usuarios= await userService.getUsuarrios()
        return res.status(200).send(usuarios)
        
    } catch (error) {
        console.log(error);
        
    }
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    const {data,error}= await userService.getUsuarioById(id)
    if (error!=null) {
        return res.status(400).json(error)
    }else if(data==null){
        return res.status(404).json("ID INEXISTENTE")
    }else{
        return res.status(200).json(data)
    }
        
        
    
})

export default router;
