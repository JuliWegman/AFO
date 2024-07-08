import { query } from "express";
import UsuarioRepository from "../repository/UsuarioRepository.js";
const repo=new UsuarioRepository();


export class UsuarioService{

    async getUsuarrios(){
        const res=await repo.getUsuarios();
        return res;
    }

    async getUsuarioById(id){
        return await repo.getUsuarioById(id)
    }

}
