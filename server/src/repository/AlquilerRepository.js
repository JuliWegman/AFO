import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class AlquilerRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }

    async getAlquileresByOficina(id){
        let data=null;
        var error=null;
        try {
            var sql="select * from alquiler where id_oficina=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

    async getAlquileresByUser(id){
        let data=null;
        var error=null;
        try {
            var sql="select * from alquiler where id_usuario=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

    async getFotoByAlquiler(id){
        let data=null;
        var error=null;
        try{
            var sql="SELECT f.contenido FROM Alquiler a JOIN Oficina o ON a.id_oficina = o.id_oficina JOIN Foto f ON o.id_oficina = f.id_oficina;"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

}