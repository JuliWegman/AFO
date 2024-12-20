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
        console.log(filtros.ambientes);
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
                index++;
            }

            if (filtros.duracion != null) {
                sql+=' ('
                filtros.duracion.forEach(dura => {
                    sql += ` o.id_duracion=$${index} or`;
                    values.push(dura);
                    index++;
                });
                sql = sql.slice(0, -2);
                sql+=') and'

            }
            if (filtros.barrio != null) {
                sql+=' ('
                filtros.barrio.forEach(barrio => {
                    sql += ` o.id_barrio=$${index} or`;
                    values.push(barrio);
                    index++;
                });
                sql = sql.slice(0, -2);
                sql+=') and'
            }
            if (filtros.ambientes != null){
                sql += ` o.ambientes = $${index} and`;
                values.push(filtros.ambientes)
                index++;
            }
            if (filtros.fecha_inicio != null){
                sql += ` o.fecha_inicio <= $${index} and`;
                values.push(filtros.fecha_inicio)
                index++;
            }
            
            if (filtros.fecha_fin != null){
                sql += ` o.fecha_fin >= $${index} and`;
                values.push(filtros.fecha_fin)
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

    async countOficinas(filtros){
        let data=null;
        var error=null;
        try {
            var sql="select COUNT(*) from oficina o where"
            const values=[]
            var index=1;
            if (filtros.max_precio != null) {
                sql += ` o.precio<$${index} and`;
                values.push(filtros.max_precio );
                index++;
            }
            if (filtros.min_precio != null) {
                sql += ` o.precio>$${index} and`;
                values.push(filtros.min_precio );
                index++;
            }
            if (filtros.duracion != null) {
                sql+=' ('
                filtros.duracion.forEach(dura => {
                    sql += ` o.id_duracion=$${index} or`;
                    values.push(dura);
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
            if (filtros.ambientes != null){
                sql += ` o.ambientes = $${index} and`;
                values.push(filtros.ambientes)
                index++;
            }
            if (filtros.fecha_inicio != null){
                sql += ` o.fecha_inicio >= $${index} or`;
                values.push(fecha_inicio)
                index++;
            }  
            if (filtros.fecha_fin != null){
                sql += ` o.fecha_fin <= $${index} or`;
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
            const result=await this.BDclient.query(sql,values)
            data=result.rows[0].count

        } catch (e) {
            error=e;
            console.log(error);
        }
        return data
    }
    async getOficinaByUser(idUsuario){
        let data = null
        let error=null
        try{
            var sql="select o.id_oficina , o.tamaño , o.sillas , o.baños , o.ambientes , o.armarios , o.calle , o.altura , o.computadoras , o.personas , l.nombre as localidad , b.nombre as barrio, u.nombre as nombreUsuario , u.apellido as apellidoUsuario , u.mail as mailUsuario , o.precio , d.tiempo as duracion , o.descripcion from oficina o inner join barrio b on b.id_barrio=o.id_barrio inner join localidad l on l.id_localidad=o.id_localidad inner join usuario u on u.id_usuario=o.id_usuario inner join duracion d on d.id_duracion=o.id_duracion where o.id_usuario=$1 "
            const values=[idUsuario]
            const result=await this.BDclient.query(sql,values)
                data=result.rows;
        }catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }

    async postOficina(oficina){
        let data=null;
        var error=null;
        try {
            var sql="INSERT INTO oficina(tamaño,escritorio,baños,ambientes,armarios,calle,altura,computadoras,descripcion,personas,id_localidad,id_usuario,precio,id_duracion,sillas,fecha_inicio,fecha_fin,id_barrio) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING id_oficina"
            const values=[oficina.tamanio,oficina.escritorio,oficina.banios,oficina.ambientes,oficina.armarios,oficina.calle,oficina.altura,oficina.computadoras,oficina.descripcion,oficina.personas,oficina.id_localidad,oficina.id_usuario,oficina.precio,oficina.id_duracion,oficina.sillas,"2022-03-02","2022-03-03",oficina.id_barrio]
            const result=await this.BDclient.query(sql,values);
            if (result.rows!=null) {
                data=result.rows[0];
                console.log(data);
            }
        } catch (e) {
            error=e
            console.log(e);
            
        }
        console.log(error);
        return {data,error}
    }


}