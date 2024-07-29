import {useEffect, useState } from "react" 
import React from "react"
import '../css/Fotos.css'

function Fotos({open,fotos}) {
    const [numFoto, setNumFoto] = useState(0);
    const [fotoActual,setFotoActual]=useState()

    useEffect(() => {
        setFotoActual(fotos[numFoto].contenido)
    }, [numFoto,fotos]);

    if (!open) return null
    return (
               
    <div className="popUpFotos" >
        {numFoto>0 &&
        <button onClick={()=>{setNumFoto(numFoto-1)}}>atras</button>}
        <img src={fotoActual} alt="" />
        {numFoto<fotos.length-1 && 
        <button onClick={()=>{setNumFoto(numFoto+1)}}>adelante</button>}
    </div>
    )
}

export default Fotos
