import React ,{useEffect, useState} from "react";
import "../css/home.css"
import lupa from "../logo/lupa.jpg"
import Logo from "../componentes/logo.js";





const Home = ({setHamburguesa,BD,usuario,setUsuario}) => {
    const [oficinas,setOficinas]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])

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
          setHamburguesa()
        },[usuario,fotoOficinas,BD])
    return(
        
        <div >

        <div className="buscador">
        <div className="busqueda">
            <input type="text" name="busqueda" placeholder ="  Busca según sus preferencias"></input>
            <div className="ciruclo"><Logo img = {lupa}/></div>

        </div>
        <div className="opciones">
            <div className="custom-select">
                <div className="select-selected">Fecha</div>
                    <div className="select-items select-hide">
                </div>
                <div className="select-selected">Ubicacion</div>
                    <div className="select-items select-hide">
                        
                </div>
                <div className="select-selected">Precio</div>
                    <div className="select-items select-hide">
                        
                </div>
                <div className="select-selected">Ambientes</div>
                    <div className="select-items select-hide">
                        
                </div>
                <div className="select-selected">Mas Filtros</div>
                    <div className="select-items select-hide">
                        
                </div>
            </div>
        </div>
    


        </div>

           
        </div>
    )
}
export default Home;