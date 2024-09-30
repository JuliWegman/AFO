import React ,{useEffect, useState} from "react";
import "../css/home.css"

import Footer from "../componentes/footer.js";
import { Link } from 'react-router-dom';
import axios from "axios";
import Filtros from "../componentes/filtros.js";


const FotosOficinas=[{contenido:"https://i.ibb.co/0sV4Lc7/images.jpg"},{contenido:"https://i.ibb.co/882k2cN/download.jpg"},{contenido:"https://img.freepik.com/foto-gratis/habitacion-vacia-sillas-escritorios_23-2149008873.jpg"},{contenido:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdtLwYmt2umetPGWczuVwnJk1MLR89M05rw&s"}]
const Barrios=[{barrio:"Caballito"},{barrio:"Recoleta"},{barrio:"Caballito"},{barrio:"Caballito"}]
const Duraciones=[{duracion:"Semana"},{duracion:"Mes"},{duracion:"Semana"},{duracion:"Día"}]



const Home = ({setIDoficina,setHamburguesa,usuario,setUsuario}) => {
    const [oficinas,setOficinas]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])
    const [next,setNext]=useState()
    const [abierto,setAbierto]=useState(false)

        useEffect(()=>{
            async function getData(){
                const res=await axios.get("/oficina?limit=4&offset=0");
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
                        <div className="oficina" onClick={()=>{setIDoficina(oficinas[0].id_oficina)}}>
                        <Link to='/oficina'>
                            <img src={FotosOficinas[0].contenido} alt="fotoOficina1"/>
                            <div className="info">
                                <h3>${oficinas[0].precio} Por {Duraciones[0].duracion}</h3>
                                <p>{oficinas[0].calle} {oficinas[0].altura}, {Barrios[0].barrio}</p>
                            </div>                 
                        </Link>
                        </div>

                        <div className="oficina" onClick={()=>{setIDoficina(oficinas[1].id_oficina)}}>
                        <Link to='/oficina'>
                        <img src={FotosOficinas[1].contenido} alt="fotoOficina1"/>
                        <div className="info">
                                <h3>${oficinas[1].precio} Por {Duraciones[1].duracion}</h3>
                                <p>{oficinas[1].calle} {oficinas[1].altura}, {Barrios[1].barrio}</p>
                            </div>    
                        </Link>
                        </div>

                        <div className="oficina" onClick={()=>{setIDoficina(oficinas[2].id_oficina)}}>
                        <Link to='/oficina'>
                        <img src={FotosOficinas[2].contenido} alt="fotoOficina1"/>
                        <div className="info">
                                <h3>${oficinas[2].precio} Por {Duraciones[2].duracion}</h3>
                                <p>{oficinas[2].calle} {oficinas[2].altura}, {Barrios[2].barrio}</p>
                            </div>    
                        </Link>
                        </div>

                       
                    </div>
                    <div className="fila">

                    <div className="oficina" onClick={()=>{setIDoficina(oficinas[3].id_oficina)}}>
                        <Link to='/oficina'>
                        <img src={FotosOficinas[3].contenido} alt="fotoOficina1"/>
                        <div className="info">
                                <h3>${oficinas[3].precio} Por {Duraciones[3].duracion}</h3>
                                <p>{oficinas[3].calle} {oficinas[3].altura}, {Barrios[3].barrio}</p>
                            </div>    
                        </Link>
                        </div>

                        <div className="oficina" onClick={()=>{setIDoficina(oficinas[1].id_oficina)}}>
                        <Link to='/oficina'>
                        <img src={FotosOficinas[1].contenido} alt="fotoOficina1"/>
                        </Link>
                        </div>

                        <div className="oficina" onClick={()=>{setIDoficina(oficinas[2].id_oficina)}}>
                        <Link to='/oficina'>
                        <img src={FotosOficinas[2].contenido} alt="fotoOficina1"/>
                        </Link>
                        </div>

                    </div>
            </div>
            <div className='footer'>
            <Footer/>
            </div>
        </div>
    )
        
}
export default Home;