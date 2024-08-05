import {useEffect, useState } from "react" 
import React from "react"
import '../css/Fotos.css'

function Fotos({open,fotos}) {
    const [numFoto, setNumFoto] = useState(0);
    const [fotoActual,setFotoActual]=useState()

    useEffect(() => {
        if (!open) {
            setNumFoto(0)
        }
        setFotoActual(fotos[numFoto].contenido)
    }, [numFoto,fotos,open]);


    if (!open) return null
    return (
    <div className="contFoto">
        <div className="popUpFotos" >
            {numFoto>0 &&
            <button onClick={()=>{setNumFoto(numFoto-1)}}>🡠</button>}
            <img src={fotoActual} alt="" />
            {numFoto<fotos.length-1 && 
            <button onClick={()=>{setNumFoto(numFoto+1)}}>🡢</button>}
        </div>
    </div>
    )
}

export default Fotos
