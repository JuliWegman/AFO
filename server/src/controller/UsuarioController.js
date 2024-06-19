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

export default router;
