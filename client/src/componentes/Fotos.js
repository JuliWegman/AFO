import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Fotos({open,fotos,close}) {

    if (!open) return null

    return (
    <div className="splide">
        <button onClick={close}>X</button>
        <Splide className="innerSplide">
            {fotos.forEach(f => {
                <SplideSlide>
                <img src={f.contenido} alt="Foto 1"/>
                </SplideSlide>
                {console.log(f);}
            })}
        </Splide>
    </div>
    )
}

export default Fotos
