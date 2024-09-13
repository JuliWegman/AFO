import { query } from "express";
import MensajeRepository from "../repository/MensajeRepository.js";
import UserRepository from "../repository/UsuarioRepository.js"


const userRepo=new UserRepository()
const repo=new MensajeRepository();


export class MensajeService{
    async InsertMensaje(mensaje){
        return await repo.InsertMensaje(mensaje);
    }

    async getMensajesByUser(id){
        var {data,error}=await repo.getMensajesByUser(id)
        const collection=[];
        var nuevo=true
        data.forEach(mensaje => {
            collection.forEach(chat => {
                if (mensaje.id_enviador==chat.id_usuario || mensaje.id_receptor==chat.id_usuario) {
                    chat.mensajes.push(mensaje)
                    nuevo=false
                }
            });
            if(nuevo){
                if (mensaje.id_enviador==id) {
                    collection.push({id_usuario:mensaje.id_receptor,mensajes:[mensaje]})
                }else{
                    collection.push({id_usuario:mensaje.id_enviador,mensajes:[mensaje]})
                }
            }
            
        });

        collection.forEach(async chat=>{
            chat.fotoUser=(await userRepo.getUsuarioById(chat.id_usuario)).data.foto
            console.log(chat.fotoUser);
            console.log("aaaaa");
        })


        data=collection
        return {data,error}
    }
}