import { createClient } from '@supabase/supabase-js'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class MensajeRepository{
    constructor(){
        this.BD=createClient(BDconfig.url,BDconfig.key)
    }  
    async InsertMensaje(mensaje){

        return await this.BD.from('mensaje').insert(mensaje).select()

    }

}