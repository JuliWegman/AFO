import React from 'react'
import {motion} from 'framer-motion'
import "../css/Fotos.css"

function Fotos({open,fotos,close}) {

    if (!open) return null

    return (
    
        <motion.div classname="slider-container">
            <motion.div classname="slider" drag="x" dragConstraints={{right:0,left:0}}>                  
                {fotos.map(foto=>(
                    <motion.div classname="fotoSlider">
                        <img src={foto.contenido} alt=""/>
                        
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

    )
}

export default Fotos
