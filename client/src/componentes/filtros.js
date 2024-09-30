import React, { useEffect,useState } from 'react';
import '../css/filtros.css';

const Filtros = () => {
    const [cantidad, setCantidad] = useState(1);
    const increment = () => {
        setCantidad(cantidad + 1); 
    };
    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1); 
        }
    }
    return(
        <filtros>
            <div className="opcion2">
                <div className="textoFiltro">
                    <p className="filtrosP">Filtros</p>
                    <u><p className="limpiar">Limpiar Filtros</p></u>
                </div>
            </div>
                        <div className="opcion2">
                <p className="precio">Precio</p>
                <div class="date-filter">
                    <div class="filter-range">
                        <label for="min-price">Precio Mínimo:</label>
                        <input type="number" id="min-price" placeholder="0" />
                    </div>
                    <div class="filter-range">
                        <label for="max-price">Precio Máximo:</label>
                        <input type="number" id="max-price" placeholder="1000" />
                    </div>
                </div>
            </div>
            <div className="opcion2">
                <p className="fecha">Fecha</p>
                <div class="date-filter">
                    <div class="filter-range">
                        <label for="start-date">Fecha de Inicio:</label>
                        <input type="date" id="start-date" />
                    </div>
                    <div class="filter-range">
                        <label for="end-date">Fecha de Fin:</label>
                        <input type="date" id="end-date" />
                    </div>
                </div>
            </div>
            
            <div className="opcion2">
                <p className="ubi">Ubicación</p>
                <div className="checkbox-container">
                        <label className="checkbox-label">
                        <input type="checkbox" className="custom-checkbox" />
                        Caballito
                        </label>
                        <label className="checkbox-label">
                        <input type="checkbox" className="custom-checkbox" />
                        Recoleta
                        </label>
                </div>
            </div>

            
            <div className="opcion2">
                <p className="ambiente">Cantidad de Ambientes</p>
                <div className="contador">
                    <button className="contador-button" onClick={decrement}><div className='menos'>-</div></button>
                    <span className="contador-value">{cantidad}</span>
                    <button className="contador-button" onClick={increment}><div className='mas'>+</div></button>
                </div>
            </div>
        </filtros>
    );
};
export default Filtros;