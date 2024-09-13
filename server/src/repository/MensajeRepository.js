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

        try{
            const sql="Insert into mensaje(id_enviador,id_receptor,contenido,fecha,mail,telefono,leido) values ($1,$2,$3,$4,$5,$6,$7)";
            const values=[mensaje.id_enviador,mensaje.id_receptor,mensaje.contenido,mensaje.fecha,mensaje.mail,mensaje.telefono,mensaje.leido];
            returnEntity=await this.BDclient.query(sql,values).data;
            console.log(returnEntity);
        }catch(e){
            error=e
            console.log(e)
        }
        return error;

    }

    async getMensajesByUser(id){

        var error=null;
        var data=null;

        try {   

            const sql="SELECT * FROM mensaje where id_enviador=$1 OR id_receptor=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e
            console.log(error);            
        }
        return {data,error}



    }

}