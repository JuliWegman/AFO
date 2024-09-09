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
        await this.BD.from('foto').select().eq('id_oficina',id)
       
        return {data,error} ;
    }

}