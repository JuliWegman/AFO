import React,{useEffect,useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom';
import '../css/alquileres.css'

const FotosOficinas=[{contenido:"https://i.ibb.co/0sV4Lc7/images.jpg"},{contenido:"https://i.ibb.co/882k2cN/download.jpg"},{contenido:"https://i.ibb.co/0qHxTzD/images.jpg"},{contenido:"https://www.eloficial.ec/wp-content/uploads/2020/08/portada-arq-dis.png"}]

const Alquileres =({setIDoficina,setHamburguesa,usuario})=>{
    const [alquileres,setAlquileres]=useState([""])
    const [fotoOficinas,setFotoOficina]=useState([""])
    const [abierto,setAbierto]=useState(false)

    useEffect(()=>{
        async function getData(){
            const res=await axios.get("/usuario/"+usuario.id_usuario+"/alquileres");
            console.log(res.data);
            if (res.data!=null) {
                setAlquileres(res.data)
            }else{
                setAlquileres(null)
            }
            setAbierto(true)
        }
            getData()
        setHamburguesa()
    },[])

    if (!abierto) return null
    return(
        <>
        <div className="container">
            <div className="titulo">
                <h1>Mis Alquileres</h1>
            </div>
            {alquileres!=null?
            <div className="fila">
                <div className="oficina" onClick={()=>{setIDoficina(alquileres[0].id_oficina)}}>
                    <Link to='/oficina'>
                        <img src={FotosOficinas[0].contenido} alt="fotoOficina1"/>
                                       
                    </Link>
                </div>
            </div>:<></>
            }
            <div className="volver">
                <Link to='/'><p>Volver a Inicio</p></Link>
            </div>
        </div>
        </>
    )
}

export default Alquileres
