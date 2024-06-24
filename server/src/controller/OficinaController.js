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
        return res.status(401).send("NO EXISTE UNA OFICINA CON ESA IDD")
        }
        
    } catch (error) {
        return res.send(error)
    }
})

router.get('/:id/alquileres',async(req,res)=>{
    const id=req.params.id;

    const alquileres=await officeService.getAlquileresByOficina(id)
    if (alquileres[0]==null){
        return res.status(401).json("Esa id_oficina no existe o no tiene fotos");
    }else{
        return res.status(200).json(alquileres);
    }

});

router.get('/:id/fotos',async (req, res)=>{
    const id= req.params.id;
    const {data,error}=await officeService.getFotosByOficina(id)
    console.log(data);
    if (data[0]==null){
            return res.status(401).json("Esa id_oficina no existe o no tiene fotos");
    }else{
            return res.status(200).json(data);
    }

})
export default router;
