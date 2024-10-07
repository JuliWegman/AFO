import express from "express";
import {OficinaService} from "../service/OficinaService.js";

const router=express.Router();
const officeService=new OficinaService();

router.get('/',async (req,res)=>{

    const limit=req.query.limit;
    const offset=req.query.offset;
    const {collection,error}= await officeService.getOficinas(limit,offset)
        
    if (error!=null) {
        console.log(error);
        return res.status(400).send(error)
    }else{
        return res.status(200).json(collection)
    }
              
    
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
    var {data,error}=await officeService.getFotosByOficina(id)
    if (error!=null) {
        return res.status(400).send(error)
    }else if (data==null){
        data=[{"contenido": "https://i.ibb.co/pnrQpnJ/2327055.png"}]
        return res.status(200).json(data);
    }else{
        return res.status(200).json(data);
    }

})

router.get('/home',async(req, res)=>{
    const filtros={
        search:req.body.search,
        tamaño:req.body.tamaño,
        ambientes:req.body.ambientes,
        computadoras:req.body.computadoras,
        barrio:req.body.barrio,
        fecha_inicio:req.body.fecha_inicio,
        fecha_fin:req.body.fecha_fin,
        max_precio:req.body.max_precio,
        min_precio:req.body.min_precio

    }

    const {collection,data}=await officeService.getOficinasByFilter(filtros)
    //SEGUIR ESTO
})

export default router;
