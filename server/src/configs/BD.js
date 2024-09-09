import 'dotenv/config'

export const BDconfig={

    host:process.env.BD_HOST ?? '',
    port:process.env.BD_PORT ?? 5432,
    user:process.env.USER ?? '',
    password:process.env.PASSWORD ?? "",
    database:process.env.DATABASE ?? ''


    // key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
    // ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
}



//https://supabase.com/docs/guides/database/connecting-to-postgres
//https://github.com/JuliWegman/TP03-01/blob/main/.env
//https://supabase.com/dashboard/project/bbyjtkctestddfzrkxug/settings/database
//https://campus.ort.edu.ar/secundaria/almagro/informatica/articulo/2065466/03-05-node-js-pg-env