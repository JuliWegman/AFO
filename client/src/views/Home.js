import React ,{useEffect, useState} from "react";
import "../css/home.css"

import Footer from "../componentes/footer.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import Filtros from "../componentes/filtros.js";


const Barrios=[{barrio:"Caballito"},{barrio:"Recoleta"},{barrio:"Caballito"},{barrio:"Caballito"}]
const Duraciones=[{duracion:"Semana"},{duracion:"Mes"},{duracion:"Semana"},{duracion:"Día"}]



const Home = ({setIDoficina,setHamburguesa,usuario,setUsuario}) => {
    const [oficinas,setOficinas]=useState([""])
    const [next,setNext]=useState()
    const [abierto,setAbierto]=useState(false)

        useEffect(()=>{
            async function getData(){
                const res=await axios.get("/oficina?limit=6&offset=0");
                console.log(res.data.data);
                setOficinas(res.data.data)
                setAbierto(true)
            }
                getData()
                setHamburguesa()
        },[])
            
        if (!abierto) return null
    return(
        <div>
            <div className="buscador">
                <div className="busqueda">
                    <input type="text" name="busqueda" placeholder ="  Busca según sus preferencias"></input>
                    <div className="ciruclo"></div>
                </div>
            </div>
            <div className="container">
                <div className="filtros">
                    <Filtros/>
                </div>
                    <div className="fila">
                        {
                            oficinas.map(ofi => 
                                <div className="oficina" onClick={()=>{setIDoficina(ofi.id_oficina)}}>
                                    <Link to='/oficina'>
                                        <img src={ofi.foto} alt="fotoOficina1"/>
                                        <div className="info">
                                            <h3>${ofi.precio} Por {Duraciones[ofi.id_duracion-1].duracion}</h3>
                                            <p>{ofi.calle} {ofi.altura}, {Barrios[0].barrio}</p>
                                        </div>                 
                                    </Link>
                                </div>
                            )
                            
                        }
                       
                        
                    </div>

            </div>
            <div className='footer'>
            <Footer/>
            </div>
        </div>
    )
        
}
export default Home;