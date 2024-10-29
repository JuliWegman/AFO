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
    async getOficinas(limit,offset,filtros){
        let data=null;
        var error=null;
        try {
            var sql="select * from oficina o where"
            const values=[limit,offset]
            var index=3;
            if (filtros.max_precio != null) {
                sql += ` o.precio<$${index} and`;
                values.push(filtros.max_precio );
                index++;
            }

            if (filtros.min_precio != null) {
                sql += ` o.precio>$${index} and`;
                values.push(filtros.min_precio );
                console.log(filtros.min_precio)
                index++;
            }
            
            if (filtros.id_duracion != null) {
                sql+=' ('
                filtros.id_duracion.forEach(duracion => {
                    sql += ` o.id_duracion=$${index} and`;
                    values.push(duracion);
                    index++;
                });
                sql = sql.slice(0, -2);
                sql+=') and'

            }
            if (filtros.ubicacion != null) {
                sql+=' ('
                filtros.ubicacion.forEach(ubicacion => {
                    sql += ` o.id_ubicacion=$${index} and`;
                    values.push(ubicacion);
                    index++;
                });
                sql = sql.slice(0, -2);
                sql+=') and'
            }
            if (filtros.cantAmbientes != null){
                sql += ` o.cantAmbientes = ${index} and`;
                values.push(cantAmbientes)
                index++;
            }
            if (filtros.fecha_inicio != null){
                sql += ` o.fecha_inicio >= ${index} or`;
                values.push(fecha_inicio)
                index++;
            }
            
            if (filtros.fecha_fin != null){
                sql += ` o.fecha_fin <= ${index} or`;
                values.push(fecha_fin)
                index++;
            }

            if (sql.endsWith(" or")) {
                sql = sql.slice(0, -3);
            }
            
            
            if (sql.endsWith(" and")) {
                sql = sql.slice(0, -4);
            }
            
            if (sql.endsWith(" where")) {
                sql = sql.slice(0, -6);
            }

            sql+=" order by o.id_oficina limit $1 offset $2 "

            console.log(sql +"AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            console.log();
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
            data=result.rows[0].count

        } catch (e) {
            error=e;
            console.log(error);
        }
        return data
    }
}   