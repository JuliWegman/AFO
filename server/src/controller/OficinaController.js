import express from "express";
import {OficinaService} from "../service/OficinaService.js";

const router=express.Router();
const officeService=new OficinaService();

router.get('/',async (req,res)=>{

    const limit=req.query.limit;
    const offset=req.query.offset;

        const data= await officeService.getOficinas(limit,offset)
        
            return res.status(200).json(data)
        
              
    
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id
        const {data,error}=await officeService.getOficinaById(id)
        if (error!=null) {
            console.log(error);
            return res.status(400).send(error)
        }else if(data==null){
            return res.status(404).send("NO EXISTE UNA OFICINA CON ESA ID")
        }else{
            return res.status(200).json(data)
        }
        
    
})

router.get('/:id/alquileres',async(req,res)=>{
    const id=req.params.id;

    const {data,error}=await officeService.getAlquileresByOficina(id)
    if (error!=null){
        return res.status(400).send(error)
    }else if(data==null){
        return res.status(404).send("Esa id_oficina no existe o no tiene alquileres");
    }else{
        return res.status(200).json(data);
    }

});

router.get('/:id/fotos',async (req, res)=>{
    const id= req.params.id;
    const {data,error}=await officeService.getFotosByOficina(id)
    if (error!=null) {
        return res.status(400).send(error)
    }else if (data==null){
        return res.status(404).send("Esa id_oficina no existe o no tiene fotos");
    }else{
        return res.status(200).json(data);
    }

})

router.get('/home',async(req, res)=>{

    const resOficinas=await officeService.getOficinasByFilter(filtros)
    //SEGUIR ESTO
})

export default router;
