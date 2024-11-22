import express from "express";
import {OficinaService} from "../service/OficinaService.js";

const router=express.Router();
const officeService=new OficinaService();



router.get('/',async (req,res)=>{
    const filtros={
        ambientes:req.query.ambientes,
        duracion:req.query.id_duracion,
        barrio:req.query.barrio,
        fecha_inicio:req.query.fecha_inicio,
        fecha_fin:req.query.fecha_fin,
        max_precio:req.query.max_precio,
        min_precio:req.query.min_precio

    }
    if (filtros.duracion!=null) {
        filtros.duracion=filtros.duracion.split()
        filtros.duracion=filtros.duracion[0].split(',')
    }
    const limit=req.query.limit;
    const offset=req.query.offset;
    const {collection,error}= await officeService.getOficinas(limit,offset,filtros)
        
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

});

router.get('/user',async (req, res)=>{
    const idUsuario = req.params.user;
    var{data,error}=await officeService.getOficinaByUser(idUsuario)
    if (error!=null) {
        console.log(error);
        return res.status(400).send(error)
    }else if(data==null){
        
        return res.status(404).send("NO EXISTE UNA OFICINA CON ESA ID")
    }else{
        return res.status(200).json(data)
    }

})


export default router;
