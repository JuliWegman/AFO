import {useEffect, useState } from "react" 
import React from "react"
import '../css/fotos.css'

function Fotos({open,fotos}) {
    const [numFoto, setNumFoto] = useState(0);
    const [fotoActual,setFotoActual]=useState()
    useEffect(() => {
        setFotoActual(fotos[numFoto].contenido)
    }, [numFoto,fotos]);

    if (!open) return null
    console.log(fotos[0].contenido);
    return (
               
    <div className="popUpFotos" >
        <img src={fotoActual} alt="" onClick={()=>{setNumFoto(numFoto+1)}}/>
    </div>
               

    )
}

export default Fotos
