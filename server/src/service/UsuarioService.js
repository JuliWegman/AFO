import { query } from "express";
import UsuarioRepository from "../repository/UsuarioRepository.js";
import AlquilerRepository from "../repository/AlquilerRepository.js"
import FotoRepository from "../repository/FotoRepository.js";
import OficinaRepository from "../repository/OficinaRepository.js"

const repo=new UsuarioRepository();
const repoAlquiler=new AlquilerRepository();
const repoFoto=new FotoRepository();
const repoOficina=new OficinaRepository();

export class UsuarioService{

    async getUsuarrios(){
        const res=await repo.getUsuarios();
        return res;
    }

    async getUsuarioById(id){
        return await repo.getUsuarioById(id)
    }

    async getAlquileresByUser(id){
        var {data,error}= await repoAlquiler.getAlquileresByUser(id)

        if (data!=null) {
            for (let i = 0; i < data.length; i++) {
                const oficina=(await repoOficina.getOficinaById(data[i].id_oficina)).data
                data[i].fotoOficina=(await repoFoto.getFotosByOficina(data[i].id_oficina)).data[0].contenido
                data[i].oficina=oficina.calle +" "+ oficina.altura
            }    
        }
        return {data,error}
    }

}
