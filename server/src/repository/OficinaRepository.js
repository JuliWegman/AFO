import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'
import pg from 'pg'

export default class OficinaRepository{
    
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }
    async getOficinas(limit,offset){
        let data=null;
        var error=null;
        try {
            var sql="select * from oficina order by id_oficina limit $1 offset $2"
            const values=[limit,offset]
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

    async getOficinaById(id){
        let data=null;
        var error=null;
        try {
            var sql="select o.id_oficina , o.tamaño , o.sillas , o.baños , o.ambientes , o.armarios , o.calle , o.altura , o.computadoras , o.personas , l.nombre as localidad , b.nombre as barrio, u.nombre as nombreUsuario , u.apellido as apellidoUsuario , u.mail as mailUsuario , o.precio , d.tiempo as duracion , o.descripcion from oficina o inner join barrio b on b.id_barrio=o.id_barrio inner join localidad l on l.id_localidad=o.id_localidad inner join usuario u on u.id_usuario=o.id_usuario inner join duracion d on d.id_duracion=o.id_duracion where o.id_oficina=$1 "
            const values=[id]
            const result=await this.BDclient.query(sql,values)
                data=result.rows[0];
            
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

    async countOficinas(){
        let data=null;
        var error=null;
        try {
            var sql="select COUNT(*) from oficina"
            const result=await this.BDclient.query(sql)
            data=result.data
        } catch (e) {
            error=e;
            console.log(error);
        }
        return data

        
        
    }
}