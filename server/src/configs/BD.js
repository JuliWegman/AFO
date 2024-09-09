import 'dotenv/config'

export const BDconfig={

    host:process.env.BD_HOST ?? '',
    port:process.env.BD_PORT ?? 6543,
    database:process.env.DATABASE ?? '',
    user:process.env.USER ?? '',
    password:process.env.PASSWORD ?? "",


    
}



//https://supabase.com/docs/guides/database/connecting-to-postgres
//https://github.com/JuliWegman/TP03-01/blob/main/.env
//https://supabase.com/dashboard/project/bbyjtkctestddfzrkxug/settings/database
//https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2065466/03-05-node-js-pg-env