import express from "express";
import {OficinaService} from "../service/OficinaService.js";

const router=express.Router();
const officeService=new OficinaService();

router.get('/',async (req,res)=>{

    const limit=req.query.limit;
    const offset=req.query.offset;

    try {
        const Oficinas= await officeService.getOficinas(limit,offset)
        return res.status(200).send(Oficinas)
        
    } catch (error) {
        console.log(error);
        
    }
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id

    try {   
        const oficina=await officeService.getOficinaById(id)
        if (oficina!=null) {
        return res.status(200).send(oficina)
        }else{
        return res.status(401).send("NO EXISTE UNA OFICINA CON ESA ID")
        }
        
    } catch (error) {
        return res.send(error)
    }
})

export default router;
