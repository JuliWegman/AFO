import { query } from "express";
import UsuarioRepository from "../repository/UsuarioRepository.js";
const repo=new UsuarioRepository();


export class UsuarioService{

    async getUsuarrios(){
        const usuarios=await repo.getUsuarios();
        return usuarios;
    }

    async getUsuarioById(id){
        return await repo.getUsuarioById(id)
    }

}
