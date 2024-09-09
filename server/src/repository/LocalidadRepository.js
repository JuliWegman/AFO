import { createClient } from '@supabase/supabase-js'
import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class LocalidadRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
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