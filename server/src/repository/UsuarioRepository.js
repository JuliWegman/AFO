import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class UsuarioRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }

    async getUsuarios(){

        const {data}=await this.BD.from('usuario').select();  
        return data;
    }

    async countUsuarios(){
        try{
        const {count}=await this.BD.from('usuario').select('*',{count:'exact', head: true})
        return count;
        }catch(error){
        console.log(error);
        }
    }
}