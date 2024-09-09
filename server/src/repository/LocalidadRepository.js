import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class LocalidadRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }
    
    async getLocalidades(limit,offset){
        let data=null;
        var error=null;
        try {
            var sql="select * from localidad limit $1 offset $2"
            const values=[limit,offset]
            const result=await this.BDclient.query(sql,values)
            data=result.data
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

    async countLocalidades(){
        let data=null;
        var error=null;
        try {
            var sql="select COUNT(*) from localidad"
            const result=await this.BDclient.query(sql)
            data=result.data
        } catch (e) {
            error=e;
            console.log(error);
        }
        return data

        
    }
}