import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
// import 'dotenv/config'

export default class OficinaRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }

    async getOficinas(limit,offset){

        const {data}=await this.BD.from('oficina').select().range(offset || 0,(offset+limit-1) || 0).order('id_oficina',{ascending:true})  
        console.log(data, "AAAAAAAA");
        return data;
    }
}