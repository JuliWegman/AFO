import express from "express";
import {LocalidadService} from "../service/LocalidadService.js";

const router=express.Router();
const locService=new LocalidadService();

router.get('/',async (req,res)=>{

    const limit=req.query.limit;
    const offset=req.query.offset;

        const {collection,error}= await locService.getLocalidades(limit,offset)

        if (error!=null) {
            return res.status(400).send(error)
        }else{
            return res.status(200).json(collection)
        }
              
    
})

export default router;

