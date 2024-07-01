import { query } from "express";
import MensajeRepository from "../repository/MensajeRepository.js";
const repo=new MensajeRepository();


export class MensajeService{
    async InsertMensaje(mensaje){
        return await repo.InsertMensaje(mensaje);
    }
}