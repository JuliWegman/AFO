import pg from 'pg'
import {BDconfig} from '../configs/BD.js'
import 'dotenv/config'

export default class BarrioRepository{
    constructor() {
        const { Client } = pg;
        this.BDclient = new Client(BDconfig);
        this.BDclient.connect();
      }

      async getBarrioById(id){
        let data=null;
        var error=null;
        try {
            var sql="select * FROM barrio WHERE id_barrio=$1"
            const values=[id]
            const result=await this.BDclient.query(sql,values)
                data=result.rows[0];
            
        } catch (e) {
            error=e;
            console.log(error);
        }
        return {data,error}
    }


}