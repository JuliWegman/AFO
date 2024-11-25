import React,{useState,useEffect} from "react";
 import axios from "axios";
import '../css/alquileres.css';
import { Link } from "react-router-dom";

const Propietario = ({usuario,setIDoficina}) => { 
    const [oficinas,setOficinas]=useState([""])
    const [cargando,setCargando]=useState(true)


    useEffect(()=>{
        async function getData(){
            const res1=await axios.get("/oficina/user/"+usuario.id_usuario)
            setOficinas(res1.data)
            console.log(res1.data);
            setCargando(false)
        }
        getData()
        
        
    },[])
    
    if (cargando) {
        return ;
    }
    return (
        <>

        <div className="contOficinaPro">
            {oficinas.length > 0 ? ( // Verifica si hay oficinas antes de mapear
                oficinas.map(ofi => (
                    <div className="oficina" key={ofi.id_oficina} onClick={() => { setIDoficina(ofi.id_oficina) }}>
                        <Link to='/oficina'>
                        <img src={ofi.foto} alt="fotoOficina1" />
                            <div className="info">
                                <h3>${ofi.precio} Por {ofi.id_duracion }</h3>
                                <p>{ofi.calle} {ofi.altura}, {ofi.barrio}</p>
                            </div>
                        </Link>
                        </div>
                            ))
                        ) : (
                            <p>No se encontraron oficinas.</p> // Mensaje si no hay oficinas
                        )}
            <div className='publicarOficina'>
                <Link to='/publicar'>
                    <button className='botonPublicar' type='button'>
                        <div className="textoBoton">
                            Publicar Oficina
                            <span className='iconPlus'>+</span>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        </>
    );
};

export default Propietario;
