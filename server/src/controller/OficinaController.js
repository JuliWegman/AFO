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

export default router;
