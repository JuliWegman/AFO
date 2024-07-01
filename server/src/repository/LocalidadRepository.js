import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class LocalidadRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }  
    
    async getLocalidades(limit,offset){
        const res=await this.BD.from('localidad').select('*').range(offset || 0,(offset+limit-1) || 0).order('id_localidad',{ascending:true});
        return res
    }

    async countLocalidades(){
        const {error,count}=await this.BD.from('localidad').select('*',{count:'exact', head: true})
        return count ? count : error;
    }
}