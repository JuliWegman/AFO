import React, { useState } from 'react';
import '../css/filtros.css';

const Filtros = ({ onApplyFilters }) => {
    const [appliedFilters, setAppliedFilters] = useState({
        max_precio: '',
        min_precio: '',
        ambientes: '',
        id_duracion: [],
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

        // Convertir id_duracion de nombres a IDs
        const durationMap = {
            "Día": 1,
            "Semana": 2,
            "Mes": 3,
            "Año": 4,
        };
        const filtrosConId = {
            ...appliedFilters,
            id_duracion: appliedFilters.id_duracion.map(dur => durationMap[dur]), // Convertir a ID
        };

        onApplyFilters(filtrosConId);
    };

    return (
        <div>
            <div className="textoFiltro">
                <p className="filtrosP">Filtros</p>
                <u><p className="limpiar">Limpiar Filtros</p></u>
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
                    {["Caballito", "Recoleta"].map((barrio) => (
                        <label key={barrio}>
                            <input
                                type="checkbox"
                                name="barrio"
                                value={barrio}
                                checked={appliedFilters.barrio.includes(barrio)}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
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
                <button type="submit" className="contador-button">Aplicar Filtros</button>
            </form>
        </div>
    );
};

export default Filtros;
