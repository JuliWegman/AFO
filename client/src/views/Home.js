import React ,{useEffect, useState} from "react";
import Header                       from "../componentes/header.js"
import "../css/home.css"
import Footer from "../componentes/footer.js";
import lupa from "../logo/lupa.jpg"
import Logo from "../componentes/logo.js";

const IDusuario=3;




const Home = ({BD}) => {
    const [oficinas,setOficinas]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])
    const [usuario,setUsuario]=useState({})

        useEffect(()=>{
            async function fetchData(){
                const res1=await BD.from('oficina').select('id_oficina,tamaño,sillas,baños,ambientes,armarios,calle,altura,computadoras,personas,localidad:id_localidad(nombre),barrio:id_barrio(nombre),usuario:id_usuario(nombre,apellido,mail),precio,duracion:id_duracion(tiempo),descripcion').range(0,4).order('id_oficina',{ascending:true})
                setOficinas(res1.data)

                oficinas.forEach(oficina=> async ()=> {
                    const foto=await BD.from('foto').select().eq('id_oficina',oficina.id_oficina).maybeSingle()
                    console.log(foto,"CCCCCCCC");
                    setFotoOficina([...fotoOficinas, foto.data]);
                });
            }
          fetchData();
        },[usuario,fotoOficinas])
    return(
        
        <div className="TODO" id="home">
            <Header IDuser={IDusuario} setUsuario={setUsuario} usuario={usuario} open={()=>{}}/>     
        <div className="busqueda">
            <input type="text" name="busqueda" placeholder ="  Busca según sus preferencias"></input>
            <div className="ciruclo"></div>
        </div>


            <div className="footer">
                <Footer/>
            </div>            
        </div>
    )
}
export default Home;