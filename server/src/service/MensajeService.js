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
        if (data!=null) {
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

            for (let i = 0; i < collection.length; i++) {
                var user= (await userRepo.getUsuarioById(collection[i].id_usuario)).data
                collection[i].fotoUser=user.foto;
                collection[i].nombreUser=user.nombre +" "+ user.apellido
            }

            data=collection
        }
        return {data,error}
    }
}