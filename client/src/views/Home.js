import React ,{useEffect, useState} from "react";
import Header from "../componentes/header.js"
import Footer from "../componentes/footer.js"
import "../css/oficinaEnEspecial.css"
import { createClient } from '@supabase/supabase-js'

 const BDconfig={
  key:process.env.KEY_SUPABASE ||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJieWp0a2N0ZXN0ZGRmenJreHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTYxNzMsImV4cCI6MjAzMjk5MjE3M30.7tVPa4prqRVWLhuISTg97e1eulZv09UqD-p5Pca4nx8"
  ,url:process.env.URL_SUPABASE ||"https://bbyjtkctestddfzrkxug.supabase.co"
}

const IDusuario=3;
const BD=createClient(BDconfig.url,BDconfig.key)



const Home = () => {
    const [oficinas,setOficinas]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])
    const [usuario,setUsuario]=useState({})

        useEffect(()=>{
            async function fetchData(){
                const res1=await BD.from('oficina').select('id_oficina,tamaño,sillas,baños,ambientes,armarios,calle,altura,computadoras,personas,localidad:id_localidad(nombre),barrio:id_barrio(nombre),usuario:id_usuario(nombre,apellido,mail),precio,duracion:id_duracion(tiempo),descripcion').range(0,4).order('id_oficina',{ascending:true})
                setOficinas(res1.data)

                oficinas.forEach(oficina=> async ()=> {
                    const foto=await BD.from('foto').select().eq('id_oficina',oficina.id_oficina).maybeSingle()
                    setFotoOficina([...fotoOficinas, foto]);
                });
            
            }
          fetchData();
        },[oficinas,fotoOficinas])
    return(
        
        <div className="TODO" id="home">
            <Header IDuser={IDusuario} setUsuario={setUsuario} usuario={usuario} open={()=>{}}/>     



            <div className='footer'>
        <Footer/>
      </div> 
        </div>
    )
}
export default Home;