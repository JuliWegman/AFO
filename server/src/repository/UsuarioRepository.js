import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class UsuarioRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }

    async getUsuarios(){

        const res=await this.BD.from('usuario').select();  
        return res;
    }

    async getUsuarioById(id){
        const res=await this.BD.from('usuario').select().eq('id_usuario',id).maybeSingle()
        return res;
        
    }
}