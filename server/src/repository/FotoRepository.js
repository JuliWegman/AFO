import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class FotoRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }  

    async getFotosByOficina(id){
        const {data,error}=await this.BD.from('foto').select().eq('id_oficina',id)
       
        return {data,error} ;
    }

}