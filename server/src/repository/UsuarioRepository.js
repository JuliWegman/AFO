import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class UsuarioRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }

    async getUsuarios(limit,offset){

        const {data}=await this.BD.from('usuario').select().range(offset || 0,(offset+limit-1) || 0).order('id_usuario',{ascending:true})  
        console.log(data, "AAAAAAAA");
        return data;
    }
}