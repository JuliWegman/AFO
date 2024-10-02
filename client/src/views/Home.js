
import React ,{useEffect, useState} from "react";
import "../css/home.css"

import Footer from "../componentes/footer.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import Filtros from "../componentes/filtros.js";


const Barrios=[{barrio:"Caballito"},{barrio:"Recoleta"},{barrio:"Caballito"},{barrio:"Caballito"}]
const Duraciones=[{duracion:"Semana"},{duracion:"Mes"},{duracion:"Semana"},{duracion:"Día"}]

const limit=3

const Home = ({setIDoficina,setHamburguesa,usuario,setUsuario}) => {
    const [oficinas,setOficinas]=useState([""])
    const [next,setNext]=useState()
    const [previous,setPrevious]=useState([])
    const [link,setLink]=useState("/oficina?limit="+limit+"&offset=0")
    const [abierto,setAbierto]=useState(false)
    const [cantidad,setCantidad]=useState(0)
    const [pagina,setPagina]=useState(1)
        

        useEffect(()=>{
            async function getData(){
                const res=await axios.get(link);
                setOficinas(res.data.data)
                setNext(res.data.paginacion.nextPage)
                setCantidad(res.data.paginacion.total)
                setAbierto(true)
            }
            
                getData()
                setHamburguesa()
        },[link])

        function Siguiente(){
            if (limit*pagina<cantidad) {
                setPagina(pagina+1)
                setPrevious([...previous, link])
                setLink(next)
            }
            
        }

        function Anterior(){
            setPagina(pagina-1)
            if (previous[0][0]==='/') {
                setLink(previous[previous.length-1])
                previous.pop()
            }
            
        }
            
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
                    <Filtros filtros/>
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
                    <div className="containerBoton">
                        <div class="pagination">
                            {previous[0]!=null&&
                            <button class="arrow-button prev" aria-label="Anterior" onClick={Anterior}>&lt;</button>
                            }   
                            {limit*pagina<cantidad&&
                            <button class="arrow-button next" aria-label="Siguiente" onClick={Siguiente}>&gt;</button>
                            }   
                            </div>
                    </div>

                    


            </div>
                {oficinas.length<4 ?
                    
                    <div className='footerMargin'>
                        <Footer/>
                    </div>
                        :
                    <div className='footer'>
                        <Footer/>
                    </div>
                }
        </div>
    )
        
}
export default Home;