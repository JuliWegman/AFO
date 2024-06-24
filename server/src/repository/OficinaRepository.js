import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class OficinaRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }

    async getOficinas(limit,offset){
        const {error,data}=await this.BD.from('oficina').select('id_oficina,tamaño,sillas,baños,ambientes,armarios,calle,altura,computadoras,personas,localidad:id_localidad(nombre),barrio:id_barrio(nombre),usuario:id_usuario(nombre,apellido,mail),precio,duracion:id_duracion(tiempo)').range(offset || 0,(offset+limit-1) || 0).order('id_oficina',{ascending:true});
        return data ? data : error
       
    }

    async getOficinaById(id){
        const {data}=await this.BD.from('oficina').select('id_oficina,tamaño,sillas,baños,ambientes,armarios,calle,altura,computadoras,personas,localidad:id_localidad(nombre),barrio:id_barrio(nombre),usuario:id_usuario(nombre,apellido,mail),precio,duracion:id_duracion(tiempo)').eq('id_oficina',id).maybeSingle()
        return data;
    }

    async countOficinas(){
        const {error,count}=await this.BD.from('oficina').select('*',{count:'exact', head: true})
        return count ? count : error;
        
    }
}