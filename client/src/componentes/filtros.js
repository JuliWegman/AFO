import React, { useState } from 'react';
import '../css/filtros.css';

const Filtros = ({ onApplyFilters }) => {
    const [appliedFilters, setAppliedFilters] = useState({
        max_precio: '',
        min_precio: '',
        ambientes: '',
        duraciones: [],
        barrio: [],
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
        e.preventDefault();
        onApplyFilters(appliedFilters);
    };

    return (
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
                            name="duraciones"
                            value={duracion}
                            checked={appliedFilters.duraciones.includes(duracion)}
                            onChange={handleCheckboxChange}
                        />
                        {duracion}
                    </label>
                ))}    
            </div>
            <div className="opcion2">
                <p className="barrio">Barrio</p>
                {["Caballito", "Recoleta"].map((barrio) => (
                    <label key={barrio}>
                        <input
                            type="checkbox"
                            name="barrio"
                            value={barrio}
                            checked={appliedFilters.barrio.includes(barrio)}
                            onChange={handleCheckboxChange}
                        />
                        {barrio}
                    </label>
                ))}
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
            <button type="submit">Aplicar Filtros</button>
        </form>
    );
};

export default Filtros;
