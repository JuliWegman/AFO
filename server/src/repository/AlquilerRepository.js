import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class AlquilerRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }  

    async getAlquileresByOficina(id){
        const {data,error}=await this.BD.from('alquiler').select().eq('id_oficina',id)
       
        return data ? data : error;
    }

}