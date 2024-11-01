import React, { useState } from 'react';
import '../css/filtros.css';

const Filtros = ({ onApplyFilters }) => {
    const [appliedFilters, setAppliedFilters] = useState({
        max_precio: '',
        min_precio: '',
        ambientes: '',
        id_duracion: [],
        barrio: '',
        fecha_inicio: '',
        fecha_fin: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAppliedFilters({
            ...appliedFilters,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setAppliedFilters((prev) => {
            const newArray = checked
                ? [...prev[name], value]
                : prev[name].filter((item) => item !== value);
            return { ...prev, [name]: newArray };
        });
    };

    const handleSubmit = (e) => {
        if(e != null){
            e.preventDefault();
        }
        
        // Convertir id_duracion de nombres a IDs
        const durationMap = {
            "Día": 1,
            "Semana": 3,
            "Mes": 2,
            "Año": 4,
        };
        const filtrosConId = {
            ...appliedFilters,
            id_duracion: appliedFilters.id_duracion.map(dur => durationMap[dur]), // Convertir a ID
        };

        onApplyFilters(filtrosConId);
    };

    function LimpiarFiltros() {
        appliedFilters.max_precio = ''
        appliedFilters.min_precio = ''
        appliedFilters.ambientes = ''
        appliedFilters.id_duracion = []
        appliedFilters.barrio = ''
        appliedFilters.fecha_inicio = ''
        appliedFilters.fecha_fin = ''
        console.log(appliedFilters.min_precio);
        handleSubmit()
    }

    return (
        <div>
            <div className="textoFiltro">
                <p className="filtrosP">Filtros</p>
                <u onClick={LimpiarFiltros}><p className="limpiar">Limpiar Filtros</p></u>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="opcion2">
                    <p className="precio">Precio</p>
                    <input
                        type="number"
                        name="min_precio"
                        placeholder="Precio Mínimo"
                        value={appliedFilters.min_precio}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="max_precio"
                        placeholder="Precio Máximo"
                        value={appliedFilters.max_precio}
                        onChange={handleChange}
                    />
                </div>
                <div className="opcion2">
                    <p className="ambientes">Cantidad de Ambientes</p>
                    <input
                        type="number"
                        name="ambientes"
                        placeholder="Cantidad de Ambientes"
                        value={appliedFilters.ambientes}
                        onChange={handleChange}
                    />
                </div>
                <div className="opcion2">
                    <p className="duracion">Duración</p>
                    {["Día", "Semana", "Mes", "Año"].map((duracion) => (
                        <label key={duracion}>
                            <input
                                type="checkbox"
                                name="id_duracion"
                                value={duracion}
                                checked={appliedFilters.id_duracion.includes(duracion)}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                            />
                            <span>{duracion}</span>
                        </label>
                    ))}
                </div>

                <div className="opcion2">
                    <p className="barrio">Barrio</p>
                    <select>
                    {[{nombre:"caballito",id:1}, {nombre:"recoleta",id:2}].map((barrio) => (
                            <option
                                value={barrio.id}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                            
                            >{barrio.nombre}</option>
                    ))}
                    </select>
                </div>
                <div className="opcion2">
                    <p className="fecha">Fecha</p>
                    <input
                        type="date"
                        name="fecha_inicio"
                        value={appliedFilters.fecha_inicio}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="fecha_fin"
                        value={appliedFilters.fecha_fin}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="contador-button">Aplicar Filtros</button>
            </form>
        </div>
    );
};

export default Filtros;
