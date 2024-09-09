import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class UsuarioRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }
    async getUsuarios(){
        let data=null;
        var error=null;
        try {
            var sql="select * from usuario"
            const result=await this.BDclient.query(sql)
            if(result.rows.length>0){
                data=result.rows;
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
       
    }

    async getUsuarioById(id){
        let data=null;
        var error=null;
        try {
            var sql="select * from usuario where id_usuario=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
            if(result.rows.length>0){
                data=result.rows[0];
            }
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
        
        
    }
}