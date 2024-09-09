import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class MensajeRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }
    async InsertMensaje(mensaje){
        var error=null;
        var returnEntity=null

        console.log([mensaje.id_enviador,mensaje.id_receptor,mensaje.contenido,mensaje.fecha,mensaje.mail,mensaje.telefono,mensaje.leido]);
        try{
            const sql="Insert into mensaje(id_enviador,id_receptor,contenido,fecha,mail,telefono,leido) values ($1,$2,$3,$4,$5,$6,$7)";
            const values=[mensaje.id_enviador,mensaje.id_receptor,mensaje.contenido,mensaje.fecha,mensaje.mail,mensaje.telefono,mensaje.leido];
            returnEntity=await this.BDclient.query(sql,values).data;
            console.log(returnEntity);
        }catch(e){
            error=null
            console.log(e)
        }
        return error;

    }

}