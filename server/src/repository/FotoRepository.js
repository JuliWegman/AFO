import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class FotoRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }

    async getFotosByOficina(id){
        let data=null;
        var error=null;
        try {
            var sql="select * from foto where id_oficina=$1"
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
    async postFoto(id_oficina,contenido){
        let data=null;
        var error=null;
        try {
            var sql="INSERT INTO foto(id_oficina,contenido) VALUES($1,$2)"
            const values=[id_oficina,contenido]
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