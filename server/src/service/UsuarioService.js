import { query } from "express";
import UsuarioRepository from "../repository/UsuarioRepository.js";
import AlquilerRepository from "../repository/AlquilerRepository.js"

const repo=new UsuarioRepository();
const repoAlquiler=new AlquilerRepository();

export class UsuarioService{

    async getUsuarrios(){
        const res=await repo.getUsuarios();
        return res;
    }

    async getUsuarioById(id){
        return await repo.getUsuarioById(id)
    }

    async getAlquileresByUser(id){
        return await repoAlquiler.getAlquileresByUser(id)
    }

}
